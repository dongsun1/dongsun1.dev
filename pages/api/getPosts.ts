import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../schemas';
import Posts from '../../schemas/post';

interface TQuery {
  category?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { category } = req.query as TQuery;
    const query: TQuery = {};
    if (category) query.category = category;

    dbConnect();
    const allPosts = await Posts.find(query);

    res.status(200).json({ posts: allPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
