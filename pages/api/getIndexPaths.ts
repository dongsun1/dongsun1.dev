import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'schemas';
import Posts from 'schemas/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect();
    const posts = await Posts.find({}, { category: 1 });

    const categoryNum: { [key: string]: number } = posts.reduce(
      (acc, { category }) => {
        if (!acc[category]) acc[category] = 1;
        else acc[category]++;
        acc.All++;
        return acc;
      },
      { All: 0 },
    );

    const paths = Object.entries(categoryNum).reduce<{ params: { slug: string[] } }[]>((acc, [category, num]) => {
      for (let i = 0; i < Math.ceil(num / 5); i++) {
        acc.push({ params: { slug: [category, (i + 1).toString()] } });
      }
      return acc;
    }, []);

    paths.push({ params: { slug: ['', ''] } });

    res.status(200).json({ paths });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
