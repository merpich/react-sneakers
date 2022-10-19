import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/blocks/Drawer/Drawer';
import Header from './components/blocks/Header/Header';
import Favourites from './pages/Favourites';
import Products from './pages/Products';

import axios from 'axios';

function App() {
	const [cartOpened, setCartOpened] = useState(false);
	const [cartProducts, setCartProducts] = useState([]);
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/cart')
			.then(response => setCartProducts(response.data));
	}, []);

	const closeCart = (event) => {
		const target = event.target;

		if (target.dataset.close || target.closest('button').dataset.close) {
			setCartOpened(!cartOpened);
		}
	}

	const addToCart = (product) => {
		axios.post('https://63445df3dcae733e8fddd57c.mockapi.io/cart', product)
			.then(response => response.data)
			.then(data => setCartProducts(prev => [...prev, data]));
	}

	const removeCartProduct = (id) => {
		axios.delete(`https://63445df3dcae733e8fddd57c.mockapi.io/cart/${id}`);
		setCartProducts(prev => prev.filter(product => product.id !== id));
	}

	const addFavourite = (product) => {
		axios.post('https://63445df3dcae733e8fddd57c.mockapi.io/favourites', product)
			.then(response => response.data)
			.then(data => setFavourites(prev => [...prev, data]));
	}

	return (
		<div className="wrapper">
			<Header onClickCart={() => setCartOpened(true)} />

			{cartOpened
				&& <Drawer
					onClose={closeCart}
					onRemove={removeCartProduct}
					products={cartProducts}
				/>}

			<main className="main">
				<Routes>
					<Route
						path="/"
						element={ <Products
								addToCart={product => addToCart(product)}
								addFavourite={product => addFavourite(product)}
							/> }
					/>

					<Route
						path="/favourites"
						element={ <Favourites favourites={favourites} /> }
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
