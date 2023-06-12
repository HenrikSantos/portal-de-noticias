import Filter from "@/components/Filter";
import RenderData from "@/components/RenderData";

export default function Home() {
	return (
		<main className="mx-auto w-full md:w-10/12">
			<Filter />
			<RenderData />
		</main>
	);
}