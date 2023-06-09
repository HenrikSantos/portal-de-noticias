import articles from './IArticles'

export default interface INews {
  status: string,
  totalResults: number,
  articles: articles[]
}