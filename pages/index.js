import Head from 'next/head';

export default function Home() {
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
				<div className="item-1">
					<p className="total-goods-text">Товаров: 143</p>
					<p className="cameras-text">Камеры</p>

					<div className="price-block">
						<p className="text">Цена, ₽</p>

						<div className="filter">
							<input type="text" placeholder="0" />
							<input type="text" placeholder="499 000" />
						</div>
					</div>

					<div className="brand-block">
						<p className="text">Бренд</p>

						<ul className="filter">
							<li className="item">
								<input type="checkbox" id="canon" name="canon" />
								<label htmlFor="canon">Canon</label>
							</li>
							<li className="item">
								<input type="checkbox" id="nikon" name="nikon" />
								<label htmlFor="nikon">Nikon</label>
							</li>
						</ul>
					</div>
				</div>
				<div className="item-2">
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>

					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					<div className="card-block">
						<img className="card-image" src="/image-camera.png" alt="image" />
						<div className="card-description">
							<p className="product-name">Olympus OM-D E-M5</p>
							<p className="product-price">28 000 ₽</p>
							<p className="add-to-cart">В корзину</p>

							<img className="add-to-favourites" src="/favorites.svg" alt="favorites" />
						</div>
					</div>
					
				</div>
			</main>
		</>
	);
}
