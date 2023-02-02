import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'schemas';
import Posts from 'schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const posts = await Posts.find();

    const slugs: string[] = posts.map(({ _id }) => _id);

    res.status(200).json({ slugs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
