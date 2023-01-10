import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../schemas';
import Posts from '../../schemas/post';

interface TQuery {
  category?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { category = 'All' } = req.query as TQuery;
    const query: TQuery = {};
    if (category !== 'All') query.category = category;

    dbConnect();
    const allPosts = await Posts.find(query, { _id: 1, title: 1, date: 1, category: 1 });

    res.status(200).json({ posts: allPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
