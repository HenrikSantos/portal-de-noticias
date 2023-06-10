import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className='sticky top-0 bg-zinc-950'>
			<div className='mx-auto flex w-10/12 items-baseline justify-between py-4'>
				<Link href="/">
					<h1 className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent'>
						Portal de Notícias
					</h1>
				</Link>
				<ul className='hidden gap-x-5 text-xl md:flex'>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'><Link href="/Tecnologia">Tecnologia</Link></li>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'><Link href="/Internacional">Internacional</Link></li>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'><Link href="/Economia">Economia</Link></li>
					<li className='rounded px-2 py-1 hover:cursor-pointer hover:bg-slate-900'><Link href="/Justiça">Justiça</Link></li>
				</ul>
			</div>
		</header>
	);
}
