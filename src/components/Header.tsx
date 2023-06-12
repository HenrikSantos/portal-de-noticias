"use client";

import MyContext from "@/context/MyContext";
import Link from "next/link";
import React, { useContext } from "react";

export default function Header() {
	const {setNewsData} = useContext(MyContext);

	async function changeTheme(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const { value } = event.currentTarget;
		try {
			const url = `http://localhost:3000/api/?q=${encodeURIComponent(value)}&`;
			const response = await fetch(url);
			const data = await response.json();
			setNewsData(data);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<header className='sticky top-0 bg-zinc-950'>
			<div className='mx-auto flex w-10/12 items-baseline justify-between py-4'>
				<Link href="/">
					<h1 className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent'>
						Portal de Notícias
					</h1>
				</Link>
				<ul className='hidden gap-x-5 text-xl md:flex'>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'>
						<button value={"Tecnologia"} onClick={changeTheme}>
							Tecnologia
						</button>
					</li>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'>
						<button value={"Internacional"} onClick={changeTheme}>
							Internacional
						</button>
					</li>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'>
						<button value={"Economia"} onClick={changeTheme}>
							Economia
						</button>
					</li>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'>
						<button value={"Justiça"} onClick={changeTheme}>
							Justiça
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
}
