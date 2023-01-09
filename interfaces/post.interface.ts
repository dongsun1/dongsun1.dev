export interface IFrontMatter {
  [key: string]: string;
}
// export interface IPost {
//   frontMatter: IFrontMatter;
//   slug: string;
//   content: string;
// }

export interface ICategory {
  category: string;
  posts: IPost[];
}

export interface IPost {
  _id: string;
  title: string;
  desc: string;
  date: Date;
  category: string;
  content: string;
}
