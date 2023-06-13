import { INews } from "@/interfaces/INews";
import { IArticles } from "@/interfaces/IArticles";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IMyContext {
  currentArticle: IArticles;
  setCurrentArticle: Dispatch<SetStateAction<object>>;
  data: INews,
	setNewsData: Dispatch<SetStateAction<object>>,
	filters: {
		title: string,
		language: string,
		date: string,
	}, 
	setFilters: Dispatch<SetStateAction<object>>,
}

export const defaultValues: IMyContext = {
	currentArticle: {
		source: {
			id: "",
			name: "",
		},
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
	filters: {
		title: "",
		language: "pt",
		date: "",
	},
	setFilters: () => "not implemented",
};

const MyContext = createContext<IMyContext>(defaultValues);

export default MyContext;
