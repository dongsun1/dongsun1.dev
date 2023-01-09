import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../schemas';
import Posts from '../../schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page, limit } = req.body;
    console.info(page);

    dbConnect();
    const posts = await Posts.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
