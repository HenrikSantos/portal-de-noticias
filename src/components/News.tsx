import React from 'react'
import IArticles from '@/interfaces/IArticles'
import Image from 'next/image'

interface INewsProp {
  article: IArticles
}

export default function News({article}: INewsProp) {
  return (
    <div>
      {
        article.urlToImage && (
          <Image src={article.urlToImage} alt='Imagem da noticia' width={100}  height={100}/>
        )
      }
      <h1>{article.title}</h1>
      {
        article.description && (
          <p>{article.description}</p>
        )
      }
      {
        article.author && (
          <p>{article.author}</p>
        )
      }
      {
        article.publishedAt && (
          <p>{article.publishedAt}</p>
        )
      }
    </div>
  )
}
