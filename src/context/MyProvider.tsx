'use client'
import React, { ReactNode, useMemo, useState } from 'react'
import MyContext from './MyContext'

interface IMyProviderProps {
  children: ReactNode
}

export default function MyProvider({children}: IMyProviderProps) {
  
  const [currentArticle, setCurrentArticle] = useState({
    source: '',
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
  })
  
  const ContextValue = useMemo(() => ({
    currentArticle,
    setCurrentArticle: setCurrentArticle as React.Dispatch<React.SetStateAction<object>>,
  }), [currentArticle, setCurrentArticle])

  return (
    <MyContext.Provider value={ContextValue}>
      {children}
    </MyContext.Provider>
  )
}
