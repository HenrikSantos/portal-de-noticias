import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import MyProvider from "@/context/MyProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portal de Notícias",
	description: "Teste técnico do Tech pro Bem - Portal de Notícias",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/png" href="favicon.svg" />
			</head>
			<body className={`${inter.className} bg-zinc-950 text-white`}>
				<MyProvider>
					<Header />
					{children}
					<Footer />
				</MyProvider>
			</body>
		</html>
	);
}
