export interface IFrontMatter {
  [key: string]: string;
}
export interface IPost {
  frontMatter: IFrontMatter;
  slug: string;
  content: string;
}

export interface ICategory {
  category: string;
  posts: IPost[];
}
