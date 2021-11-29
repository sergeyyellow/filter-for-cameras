import Head from 'next/head';
import { useState, useEffect } from "react";

import { filter } from './api/filter';

import FilterBlock from '../components/filter-block/filter-block';
import CardBlockContainer from '../components/card-block-container/card-block-container';

// Receiving data on the server-side
export const getServerSideProps = async () => {
	try {
		let response = await filter();

		return {
			props: { data: response }
		};
	} catch (err) {
		throw new Error(err);
	}
};

// Home page
export default function Home({ data }) {
	// These hooks are responsible for assigning the entered values 
	// to the minimum and maximum price fields.
	const [minPrice, setMinPrice] = useState(false);
	const [maxPrice, setMaxPrice] = useState(false);

	// This hook is responsible for assigning the selected brands
	const [brands, setBrands] = useState([]);

	// This hook is responsible for assigning data after the filter 
	// has been applied
	const [filterData, setFilterData] = useState(false);

	// This hook is responsible for ensuring that the data is updated 
	// when you click on the "Apply" button
	const [dataUpdated, setDataUpdated] = useState(false);

	useEffect(async () => {
		if (dataUpdated) {
			setFilterData(await filter(minPrice, maxPrice, brands));
			setDataUpdated(false);
		}
	}, [dataUpdated]);

	return (
		<>
			<Head>
				<title>Filter for cameras</title>
				<meta name="description" content="Filter for cameras" />

				<link rel="icon" href="/favicon.ico" />
				
				{/* Connecting the Montserrat font */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet" />
			</Head>

			<main className="grid-container">
				<FilterBlock
					data={filterData ? filterData : data}
					setMinPrice={setMinPrice}
					setMaxPrice={setMaxPrice}
					brands={brands}
					setBrands={setBrands}
					setDataUpdated={setDataUpdated} />
				<CardBlockContainer
					products={filterData ? filterData.products : data.products} />
			</main>
		</>
	);
}