import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/blocks/Drawer/Drawer';
import Header from './components/blocks/Header/Header';
import Favourites from './pages/Favourites';
import Products from './pages/Products';

import axios from 'axios';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [products, setProducts] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [cartProducts, setCartProducts] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const products = await axios.get('http://localhost/react-sneakers-api/get-products.php');
			const cart = await axios.get('http://localhost/react-sneakers-api/get-cart.php');
			const favourites = await axios.get('http://localhost/react-sneakers-api/get-favourites.php');

			setIsLoading(false);

			setCartProducts(cart.data);
			setFavourites(favourites.data);
			setProducts(products.data);
		}

		fetchData();
	}, []);

	const onChangeSearch = (event) => {
		setSearchValue(event.target.value);
	}

	const closeCart = (event) => {
		const target = event.target;

		if (target.dataset.close || target.closest('button').dataset.close) {
			setCartOpened(!cartOpened);
		}
	}

	const addFavourite = async (product) => {
		try {
			if (favourites.find(fav => fav.id === product.id)) {
				axios.delete(`http://localhost/react-sneakers-api/delete-favourites-item.php?product_id=${product.id}`);
			} else {
				const { data } = await axios.post(`http://localhost/react-sneakers-api/add-to-favourites.php?product_id=${product.id}`, product);
				setFavourites(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в закладки');
		}
	}

	const addToCart = async (product) => {
		try {
			if (cartProducts.find(item => item.id === product.id)) {
				axios.delete(`http://localhost/react-sneakers-api/delete-cart-item.php?product_id=${product.id}`);
				setCartProducts(prev => prev.filter(item => item.id !== product.id));
			} else {
				const { data } = await axios.post('http://localhost/react-sneakers-api/add-to-cart.php', product);
				setCartProducts(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в корзину');
		}
	}

	const removeCartProduct = (id) => {
		axios.delete(`http://localhost/react-sneakers-api/delete-cart-item.php?product_id=${id}`);
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
						element={
							<Products
								onChangeSearch={onChangeSearch}
								searchValue={searchValue}
								products={products}
								cartProducts={cartProducts}
								addToCart={addToCart}
								addFavourite={addFavourite}
								isLoading={isLoading}
							/>
						}
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
