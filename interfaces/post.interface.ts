export interface IPost {
  title: string;
  date: string;
  category: string;
  desc: string;
}

export interface ICategory {
  category: string;
  posts: IPost[];
}
