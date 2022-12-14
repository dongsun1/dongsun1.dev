import { ICategoryCounts } from 'interfaces/post.interface';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'schemas';
import Posts from 'schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const categoryCounts: ICategoryCounts = {};

    const categories = await Posts.find().sort({ date: -1 }).distinct('category');
    for (const category of categories) {
      const count = await Posts.countDocuments({ category });
      categoryCounts[category] = count;
    }

    res.status(200).json({ categoryCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
