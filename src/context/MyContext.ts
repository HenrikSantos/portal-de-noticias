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
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
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
	setCurrentArticle: () => {},
	query: "",
	setQuery: () => {},
};

const MyContext = createContext<IMyContext>(defaultValues);

export default MyContext;
