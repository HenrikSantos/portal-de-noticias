export default async function getNews(query: string, language='pt') {
	try {
		return await (
			await fetch(`https://newsapi.org/v2/everything?q=${query ? query: "a"}&language=${language}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
		)).json();
	} catch (error) {
		alert(error);
	}
}