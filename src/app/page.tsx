"use client";

import "dotenv/config";

import News from "@/components/News";
import MyContext from "@/context/MyContext";
import { IArticles } from "@/interfaces/IArticles";
import { useEffect, useState, useContext } from "react";

async function getNews(query = "a") {
	return await (await fetch(`
		https://newsapi.org/v2/everything?q=${query ? query : "a"}&language=pt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
	)).json();
}

export default function Home() {
	const [data, setData] = useState({ articles: [] });
	const { query, setQuery } = useContext(MyContext);
	useEffect(() => {
		async function fetchData() {
			const { articles } = await getNews(query);
			setData({ articles });
		}

		fetchData();
	}, [query]);

	function handleChanges({ target: { value } }: { target: { value: string } }) {
		setQuery(value);
	}

	return (
		<main className='mx-auto mt-4 flex flex-col items-start justify-between gap-10 px-10 md:w-8/12 md:flex-row md:flex-wrap md:gap-3 md:p-0'>
			<input className='w-full rounded p-2 text-black' placeholder='Pesquise um termo' onChange={(e) => handleChanges(e)} value={query} type="text" name="pesquisa" id="find" />
			{
				data.articles && (data.articles.map((article: IArticles, index) => (
					<News article={article} key={article.source.id + article.title + index} />
				)))
			}
		</main>
	);
}