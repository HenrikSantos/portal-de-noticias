import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <h1>Portal de Notícias</h1>
      <ul>
        <li><Link href="/Tecnologia">Tecnologia</Link></li>
        <li><Link href="/Internacional">Internacional</Link></li>
        <li><Link href="/Economia">Economia</Link></li>
        <li><Link href="/Justiça">Justiça</Link></li>
      </ul>
    </header>
  )
}
