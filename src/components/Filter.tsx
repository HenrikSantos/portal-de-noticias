"use client";

import { useEffect, useState, ChangeEvent, useContext } from "react";
import MyContext from "@/context/MyContext";

export default function Filter() {
	const { setNewsData } = useContext(MyContext);
	const [ filters, setFilters] = useState({
		title: "",
		language: "pt",
		date: ""
	});

	useEffect(() => {
		handleFormSubmit();
	}, []);

	async function handleFormSubmit () {
		try {
			let url = "http://localhost:3000/api/?";
			if (filters.title) {
				url += `q=${encodeURIComponent(filters.title)}&`;
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
			alert(error);
		}
	};

	const handleFilterChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		
		setFilters((prevFormData) => ({
			...prevFormData,
			[name]: value
		}));
	};
  

	return (
		<form className="
			flex flex-col mx-10 sticky top-14 bg-black py-5 gap-3
			md:flex-row md:mx-0
		">
			<input
				className="rounded p-2 text-black basis-full"
				type="text"
				name="title"
				placeholder="Título"
				value={filters.title}
				onChange={handleFilterChange}
			/>

			<select
				value={filters.language}
				name="language"
				onChange={handleFilterChange}
				title="language"
				className="rounded p-2 text-black basis-auto">
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

			<input
				className="rounded p-2 text-black basis-auto"
				type="date"
				name="date"
				value={filters.date}
				onChange={handleFilterChange}
			/>

			<button className="rounded bg-white p-2 text-black hover:bg-slate-200 basis-auto" onClick={() => handleFormSubmit()} type="button">Filtrar</button>
		</form>
	);
}
