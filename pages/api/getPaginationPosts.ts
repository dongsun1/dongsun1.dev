import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../schemas';
import Posts from '../../schemas/post';

interface TQuery {
  page: number;
  category?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = 1, category } = req.query as Partial<TQuery>;

    const query: { category?: string } = {};
    if (category) query.category = category;

    dbConnect();
    const posts = await Posts.find(query, { _id: 1, title: 1, desc: 1, category: 1, date: 1 })
      .skip((page - 1) * 5)
      .limit(5);

    const total = await Posts.countDocuments(query);

    res.status(200).json({ posts, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
