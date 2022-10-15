import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/items')
			.then(response => setItems(response.data));

		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/cart')
			.then(response => setCartItems(response.data));
	}, []);

	const addToCart = (product) => {
		axios.post('https://63445df3dcae733e8fddd57c.mockapi.io/cart', product);
		setCartItems(prev => [...prev, product]);
	}

	const removeCartItem = (id) => {
		axios.delete(`https://63445df3dcae733e8fddd57c.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => item.id !== id));
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	}

	return (
		<div className="wrapper">
			{cartOpened
				&& <Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={removeCartItem}
				/>}

			<Header onClickCart={() => setCartOpened(true)} />

			<main className="main">
				<div className="content">
					<div className="content__header">
						<h1 className="title" value={searchValue}>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
						<label className="search">
							<svg className="search__icon" width={14} height={14}>
								<use xlinkHref="/img/icons/sprites.svg#search"></use>
							</svg>
							<input
								className="search__input"
								type="text"
								placeholder="Поиск..."
								onChange={onChangeSearchInput}
							/>
						</label>
					</div>

					<div className="catalog">
						{items
							.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map((item, index) => (
							<Card
								key={index}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onLike={() => console.log('Добавили в закладки')}
								onPlus={(product) => addToCart(product)}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
