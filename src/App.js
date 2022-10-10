import React from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

const sneakers = [
	{title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
	{title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/2.jpg'},
	{title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg'},
	{title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl: '/img/sneakers/4.jpg'},
];

function App() {
	return (
		<div className="wrapper">
			<Drawer />
			<Header />

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
						{sneakers.map(item => (
							<Card
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onLike={() => console.log('Добавили в закладки')}
								onPlus={() => console.log('Нажали на полюс')}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
