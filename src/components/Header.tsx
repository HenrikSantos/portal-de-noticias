import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='sticky bg-zinc-950 top-0 py-4 items-baseline flex justify-between w-10/12 mx-auto'>
      <Link href="/">
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-extrabold'>
          Portal de Notícias
        </h1>
      </Link>
      <ul className='flex gap-x-5 text-xl'>
        <li><Link href="/Tecnologia">Tecnologia</Link></li>
        <li><Link href="/Internacional">Internacional</Link></li>
        <li><Link href="/Economia">Economia</Link></li>
        <li><Link href="/Justiça">Justiça</Link></li>
      </ul>
    </header>
  )
}
