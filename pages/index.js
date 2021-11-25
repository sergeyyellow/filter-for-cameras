import Head from 'next/head';

import FilterBlock from '../components/filter-block/filter-block';
import CardBlockContainer from '../components/card-block-container/card-block-container';

export const getStaticProps = async () => {
	try {
		const response = await fetch('https://getlens-master.stage.dev.family/api/pages/obektivy');
		const data = await response.json();

		return {
			props: { data: data }
		}
	} catch (err) {
		throw new Error('Ошибка обращения к серверу');
	}
};

export default function Home({ data }) {
	console.log(data);

	return (
		<>
			<Head>
				<title>Filter for cameras</title>
				<meta name="description" content="Filter for cameras" />
				<link rel="icon" href="/favicon.ico" />

				<style>
					@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
				</style>
			</Head>

			<main className="grid-container">
				<FilterBlock data={data} />
				<CardBlockContainer products={data.products} />
			</main>
		</>
	);
}