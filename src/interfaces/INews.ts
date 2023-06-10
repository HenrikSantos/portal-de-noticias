import { IArticles } from "./IArticles";

export default interface INews {
  status: string;
  totalResults: number;
  articles: IArticles[];
};
