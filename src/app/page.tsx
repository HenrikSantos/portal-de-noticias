"use client";

import "dotenv/config";

import News from "@/components/News";
import { IArticles } from "@/interfaces/IArticles";
import { useEffect, useState, ChangeEvent } from "react";

export default function Home() {
	const [ data, setNewsData ] = useState({articles: []});
	const [filters, setFilters] = useState({
		title: "",
		language: "pt",
		date: ""
	});

	async function handleFormSubmit () {
		console.log("entrou aqui", filters);
		
		try {
			let url = "http://localhost:3000/api/?";
			if (filters.title) {
				url += `&q=${encodeURIComponent(filters.title)}&`;
			} else url += "&q=a&";
			if (filters.language) {
				url += `language=${encodeURIComponent(filters.language)}&`;
			}
			if (filters.date) {
				url += `date=${encodeURIComponent(filters.date)}`;
			}
			const response = await fetch(url);
			const data = await response.json();
			setNewsData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleFormSubmit();
	}, []);

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;
		
		setFilters((prevFormData) => ({
			...prevFormData,
			[name]: value
		}));
	};

	return (
		<main className='mx-auto mt-4 flex flex-col items-start justify-between gap-10 px-10 md:w-8/12 md:flex-row md:flex-wrap md:gap-3 md:p-0'>
			<form>
				<input className='w-full rounded p-2 text-black' type="text" name="title" placeholder="Título" value={filters.title} onChange={handleFilterChange} />
				<select value={filters.language} name="language" onChange={handleFilterChange} className='w-full rounded p-2 text-black'>
					<option value="">Todos</option>
					<option value="ar">Árabe</option>
					<option value="de">Alemão</option>
					<option value="en">Inglês</option>
					<option value="es">Espanhol</option>
					<option value="fr">Francês</option>
					<option value="he">Hebraico</option>
					<option value="it">Italiano</option>
					<option value="nl">Holandês</option>
					<option value="no">Norueguês</option>
					<option value="pt">Português</option>
					<option value="ru">Russo</option>
					<option value="sv">Sueco</option>
					<option value="zh">Chinês</option>
				</select>
				<input className='w-full rounded p-2 text-black' type="date" name="date" placeholder="Data (AAAA-MM-DD)" value={filters.date} onChange={handleFilterChange} />
				<button className='w-full rounded bg-white p-2 text-black' onClick={() => handleFormSubmit()} type="button">Filtrar</button>
			</form>
			{
				data?.articles && (data.articles.map((article: IArticles, index: number) => (
					<News article={article} key={article.source.id + article.title + index} />
				)))
			}
		</main>
	);
}