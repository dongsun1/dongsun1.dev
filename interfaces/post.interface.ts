export interface ICategoryCounts {
  [key: string]: number;
}
export interface IPost {
  _id: string;
  title: string;
  desc: string;
  date: Date;
  category: string;
  content: string;
}
