'use client'

import MyContext from '@/context/MyContext'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

export default function page() {
  const {
    currentArticle: {
      author,
      title,
      publishedAt,
      description,
      urlToImage
  }, setCurrentArticle} = useContext(MyContext)

  useEffect(() => {
    const savedArticle = JSON.parse(localStorage.getItem('article') || '');
    if (savedArticle) setCurrentArticle({...savedArticle})
  }, [])

  return (
    <section className='
    space-y-3
    mx-auto
    md:w-8/12 md:p-0'>
      <h1 className='text-3xl font-extrabold'>{title}</h1>
      <p>{description}</p>
      <p>{publishedAt}</p>
      <img
        className='w-full bg-auto bg-no-repeat bg-center rounded border border-white/50'
        src={urlToImage}
        alt='Imagem da noticia'
      />
      <p className='underline'>{author}</p>
    </section>
  )
}
