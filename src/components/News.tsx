"use client";

import React, { useContext, useState } from "react";
import { IArticles } from "@/interfaces/IArticles";
import { useRouter } from "next/navigation";
import MyContext from "@/context/MyContext";

interface INewsProp {
	article: IArticles
}


export default function News({ article }: INewsProp) {
	const router = useRouter();

	const { setCurrentArticle } = useContext(MyContext);

	function handleClick() {
		localStorage.setItem("article", JSON.stringify(article));
		setCurrentArticle({ ...article });
		router.push(`/details/${article.title.replace(/\s+/g, "-").toLowerCase()}`)
	}

	return (
		<div
			onClick={() => handleClick()}
			className='items-start rounded text-left shadow-md hover:cursor-pointer md:w-[27rem] '
		>
			{
				article.urlToImage && (
					<img className='h-2/6 w-full object-cover object-center rounded shadow-inner' src={article.urlToImage} alt='Imagem da noticia' />
				)
			}
			<div className='my-3 border-s-2 px-3'>
				<h1 className='text-xl font-bold'>{article.title}</h1>
				<p className=''>- {article.description}</p>
				<p className='text-purple-500'>Data: {article.publishedAt.slice(0, 10)}</p>
				<p>- Autor: <span className='underline'>{article.author}</span></p>
			</div>
		</div>
	);
}
