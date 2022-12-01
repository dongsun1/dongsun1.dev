export interface IFrontMatter {
  title: string;
  date: string;
  category: string;
  desc: string;
}
export interface IPost {
  frontMatter: IFrontMatter;
  slug?: string;
  content: string;
}

export interface ICategory {
  category: string;
  posts: IPost[];
}
