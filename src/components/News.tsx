'use client'

import React, { useContext, useState } from 'react'
import IArticles from '@/interfaces/IArticles'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import MyContext from '@/context/MyContext';

interface INewsProp {
  article: IArticles
}


export default function News({article}: INewsProp) {
  const {setCurrentArticle} = useContext(MyContext)
  const [redirection, setRedirection] = useState(false);

  function handleClick () {
    localStorage.setItem('article', JSON.stringify(article));
    setCurrentArticle({...article});
    setRedirection(true);
  }

  if(redirection) redirect(`/details/${article.title.replace(/\s+/g, '-').toLowerCase()}`);


  return (
    <div
      onClick={() => handleClick()}
      className='md:w-[27rem] bg-gray-900 p-3 text-left items-start'
    >
      {
        article.urlToImage && (
          <Image className='float-left mr-3' src={article.urlToImage} alt='Imagem da noticia' width={150}  height={150}/>
        )
      }
      <h1 className='text-xl font-bold'>{article.title}</h1>
      {
        article.description && (
          <p className=''>- {article.description}</p>
        )
      }
      {
        article.author && (
          <p className='underline'>- {article.author}</p>
        )
      }
      {
        article.publishedAt && (
          <p>Data:{article.publishedAt}</p>
        )
      }
    </div>
  )
}
