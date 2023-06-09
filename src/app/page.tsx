import IArticles from '@/interfaces/IArticles';
import News from '@/components/News';
import INews from '@/interfaces/INews';

async function getNews(query = '') {
  return await(await fetch(`https://newsapi.org/v2/everything?q=${query}a&language=pt&apiKey=${process.env.API_KEY}`)).json()
}

export default async function Home() {
  const data: INews = await getNews();
  
  return (
    <main className='
      flex flex-col
      p-10 mx-auto justify-between gap-10
      md:flex-row md:flex-wrap md:w-8/12 md:gap-3 md:p-0
    '>
      {
        data?.articles && (
          data.articles.map((article: IArticles) => (
            <News article={article} key={article.source.id || article.title} />
          ))
          )
      }
    </main>
  )
}
