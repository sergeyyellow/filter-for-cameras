import Head from 'next/head';
import { useState } from "react";

// 
import { filter } from './api/filter';

import FilterBlock from '../components/filter-block/filter-block';
import CardBlockContainer from '../components/card-block-container/card-block-container';

export const getStaticProps = async () => {
	try {
		let response = await filter();

		return {
			props: { data: response }
		};
	} catch (err) {
		console.log(err.message);
	}
};

// Home page
export default function Home({ data }) {
	// These states are responsible for checking the entered values 
	// in the fields of the minimum and maximum prices
	const [minPrice, setMinPrice] = useState(false);
	const [maxPrice, setMaxPrice] = useState(false);

	return (
		<>
			<Head>
				<title>Filter for cameras</title>
				<meta name="description" content="Filter for cameras" />
				<link rel="icon" href="/favicon.ico" />

				{/* Connecting the Montserrat font */}
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