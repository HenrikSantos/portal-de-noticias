"use client";

import { useEffect, ChangeEvent, useContext } from "react";
import MyContext from "@/context/MyContext";

export default function Filter() {
	const { setNewsData, filters, setFilters } = useContext(MyContext);

	useEffect(() => {
		handleFormSubmit();
	}, []);

	async function handleFormSubmit () {
		try {
			let url = `${window.location.origin}/api/?`;
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

	function handleFilterChange(
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) {
		const { name, value } = event.target;
		
		setFilters((prevFormData) => ({
			...prevFormData,
			[name]: value
		}));
	};
  
	function clear() {
		setFilters({
			title: "",
			language: "pt",
			date: "",
		});
	}

	return (
		<form className="
			mx-10 flex flex-col gap-3 bg-black py-5
			md:sticky md:top-14 md:mx-0 md:flex-row
		">
			<input
				className="basis-full rounded p-2 text-black"
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
				className="basis-auto rounded p-2 text-black">
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
				className="basis-auto rounded p-2 text-black"
				type="date"
				name="date"
				value={filters.date}
				onChange={handleFilterChange}
			/>

			<button className="basis-auto rounded bg-white p-2 text-black hover:bg-slate-200" onClick={() => handleFormSubmit()} type="button">Filtrar</button>
			<button className="basis-auto rounded bg-white p-2 text-black hover:bg-slate-200" onClick={clear} type="button">Limpar</button>
		</form>
	);
}
