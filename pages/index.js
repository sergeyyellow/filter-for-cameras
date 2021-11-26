import { useState } from 'react';
import Head from 'next/head';

import { filter } from './api/filter';

import FilterBlock from '../components/filter-block/filter-block';
import CardBlockContainer from '../components/card-block-container/card-block-container';

export const getStaticProps = async () => {
	const repsonse = await filter();

	return {
		props: { data: repsonse }
	};
};

export default function Home({ data }) {
	console.log(data);

	const [minPrice, setMinPrice] = useState(false);
	console.log('Min price: ' + minPrice);
	const [maxPrice, setMaxPrice] = useState(false);
	console.log('Max price: ' + maxPrice);

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
				<FilterBlock data={data} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
				<CardBlockContainer products={data.products} />
			</main>
		</>
	);
}