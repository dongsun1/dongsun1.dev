import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../schemas';
import Posts from '../../schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { category } = req.body;
    const query: { category?: string } = {};
    if (category) query.category = category;

    dbConnect();
    const allPosts = await Posts.find(query);

    res.status(200).json({ posts: allPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
