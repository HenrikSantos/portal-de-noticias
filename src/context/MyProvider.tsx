"use client";
import React, { ReactNode, useMemo, useState } from "react";
import MyContext from "./MyContext";

interface IMyProviderProps {
	children: ReactNode
}

export default function MyProvider({ children }: IMyProviderProps) {

	const [ currentArticle, setCurrentArticle ] = useState({
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
	});

	const [ filters, setFilters ] = useState({
		title: "",
		language: "pt",
		date: "",
		sortBy: "publishedAt",
	});

	const [ data, setNewsData ] = useState({ status: "", totalResults: 0, articles: [] });

	const ContextValue = useMemo(() => ({
		currentArticle,
		setCurrentArticle: setCurrentArticle as React.Dispatch<React.SetStateAction<object>>,
		data,
		setNewsData: setNewsData as React.Dispatch<React.SetStateAction<object>>,
		filters,
		setFilters: setFilters as React.Dispatch<React.SetStateAction<object>>,
	}), [ currentArticle, setCurrentArticle, data, setNewsData, filters, setFilters ]);

	return (
		<MyContext.Provider value={ContextValue}>
			{children}
		</MyContext.Provider>
	);
}
