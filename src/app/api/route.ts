import { NextResponse } from "next/server";
import fetch from "node-fetch";


export async function GET(request: Request) {
	const params = new URLSearchParams(request.url.split("?")[1]);

	const title = params.get("q");
	const language = params.get("language");
	const date = params.get("date");
	
	
	
	let url = "https://newsapi.org/v2/everything?";
	
	if (title) {
		url += `q=${encodeURIComponent(title)}&`;
	}
	if (language) {
		url += `language=${encodeURIComponent(language)}&`;
	}
	if (date) {
		url += `from=${encodeURIComponent(date)}&to=${encodeURIComponent(date)}&`;
	}

	console.log(url);

	url += `apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

	const res = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await res.json();	

	return NextResponse.json(data);
}