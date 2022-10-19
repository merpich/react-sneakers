import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/blocks/Drawer/Drawer';
import Header from './components/blocks/Header/Header';
import Favourites from './pages/Favourites';
import Products from './pages/Products';

import axios from 'axios';

function App() {
	const [products, setProducts] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [cartProducts, setCartProducts] = useState([]);
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/products')
			.then(response => setProducts(response.data));

		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/cart')
			.then(response => setCartProducts(response.data));

		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/favourites')
			.then(response => setFavourites(response.data));
	}, []);

	const closeCart = (event) => {
		const target = event.target;

		if (target.dataset.close || target.closest('button').dataset.close) {
			setCartOpened(!cartOpened);
		}
	}

	const addFavourite = async (product) => {
		try {
			if (favourites.find(fav => fav.id === product.id)) {
				axios.delete(`https://63445df3dcae733e8fddd57c.mockapi.io/favourites/${product.id}`);
			} else {
				const { data } = await axios.post('https://63445df3dcae733e8fddd57c.mockapi.io/favourites', product);
				setFavourites(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в закладки');
		}
	}

	const addToCart = async (product) => {
		try {
			const { data } = await axios.post('https://63445df3dcae733e8fddd57c.mockapi.io/cart', product);
			setCartProducts(prev => [...prev, data]);
		} catch (error) {
			alert('Не удалось добавить в корзину');
		}
	}

	const removeCartProduct = (id) => {
		axios.delete(`https://63445df3dcae733e8fddd57c.mockapi.io/cart/${id}`);
		setCartProducts(prev => prev.filter(product => product.id !== id));
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
								products={products}
								addToCart={addToCart}
								addFavourite={addFavourite}
							/> }
					/>

					<Route
						path="/favourites"
						element={ <Favourites
								favourites={favourites}
								addFavourite={addFavourite}
							/> }
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
