import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../schemas';
import Posts from '../../../schemas/post';
import mongoose from 'mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const _id = new mongoose.Types.ObjectId(req.query.slug as string);
    const post = await Posts.findOne({ _id });

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
