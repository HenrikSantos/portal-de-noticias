"use client";

import MyContext from "@/context/MyContext";
import React, { useContext, useEffect } from "react";

export default function Page() {
	const {
		currentArticle: {
			author,
			title,
			publishedAt,
			description,
			urlToImage
		}, setCurrentArticle } = useContext(MyContext);

	function loadArticle() {
		const savedArticle = JSON.parse(localStorage.getItem("article") || "");
		if (savedArticle) setCurrentArticle({ ...savedArticle });
	}

	useEffect(() => {
		loadArticle();
	}, []);

	return (
		<section className='
    mx-auto
    space-y-3
    md:w-8/12 md:p-0'>
			<h1 className='text-3xl font-extrabold'>{title}</h1>
			<p>{description}</p>
			{urlToImage && (
				<img
					className='w-full rounded border border-white/50 bg-auto bg-center bg-no-repeat'
					src={urlToImage}
					alt='Imagem da noticia'
				/>
			)}
			<p>Data: {new Date(publishedAt).toLocaleDateString()}</p>
			<p>Autor: <span className='underline'>{author}</span></p>
		</section>
	);
}
