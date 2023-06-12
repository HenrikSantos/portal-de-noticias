import { INews } from "@/interfaces/INews";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IMyContext {
  currentArticle: {
    source: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  };
  setCurrentArticle: Dispatch<SetStateAction<object>>;
  data: INews,
	setNewsData: Dispatch<SetStateAction<object>>,
}

export const defaultValues: IMyContext = {
	currentArticle: {
		source: "",
		author: "",
		title: "",
		description: "",
		url: "",
		urlToImage: "",
		publishedAt: "",
		content: "",
	},
	setCurrentArticle: () => "not implemented",
	data: {
		status: "", totalResults: 0, articles: []
	},
	setNewsData: () => "not implemented",
};

const MyContext = createContext<IMyContext>(defaultValues);

export default MyContext;
