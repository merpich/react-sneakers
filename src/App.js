import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://63445df3dcae733e8fddd57c.mockapi.io/items')
			.then(response  => response.json())
			.then(json => setItems(json));
	}, []);

	const addToCart = (product) => {
		setCartItems(prev => [...prev, product]);
	}

	return (
		<div className="wrapper">
			{cartOpened
				&& <Drawer
					onClose={() => setCartOpened(false)}
					items={cartItems}
				/>}

			<Header onClickCart={() => setCartOpened(true)} />

			<main className="main">
				<div className="content">
					<div className="content__header">
						<h1 className="title">Все кроссовки</h1>
						<label className="search">
							<svg className="search__icon" width={14} height={14}>
								<use xlinkHref="/img/icons/sprites.svg#search"></use>
							</svg>
							<input className="search__input" type="text" placeholder="Поиск..." />
						</label>
					</div>

					<div className="catalog">
						{items.map(item => (
							<Card
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
