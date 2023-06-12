"use client";

import News from "@/components/News";
import { IArticles } from "@/interfaces/IArticles";
import { useContext } from "react";
import MyContext from "@/context/MyContext";

export default function RenderData() {
  
	const {data} = useContext(MyContext);
	return (
		<section className="
			mx-auto flex flex-col items-start justify-between gap-y-10 px-10
			md:flex-row md:flex-wrap md:gap-2 md:gap-y-0 md:px-0
    ">
			{
				data?.articles?.[0] && (
					data.articles.map((article: IArticles, index: number) => 
						<News article={article} key={article.source.id + article.title + index} />
					)
				)
			}
		</section>
	);
}
