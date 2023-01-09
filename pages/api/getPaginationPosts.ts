import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../schemas';
import Posts from '../../schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page, limit, category } = req.body;

    const query: { category?: string } = {};
    if (category) query.category = category;

    dbConnect();
    const posts = await Posts.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Posts.countDocuments(query);

    res.status(200).json({ posts, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
