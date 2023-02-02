import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'schemas';
import Posts from 'schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const slugs = await Posts.find({}, { _id: 1 });
    const paths = slugs.map(({ _id }) => `/post/${_id}`);

    res.status(200).json({ paths });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
