import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../components/ui/Title/Title';
import Search from '../components/ui/Search/Search';
import Card from '../components/blocks/Card/Card';

function Products({ addToCart, addFavourite }) {
	const [searchValue, setSearchValue] = useState('');
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('https://63445df3dcae733e8fddd57c.mockapi.io/products')
			.then(response => setProducts(response.data));
	}, []);

	const onChangeSearch = (event) => {
		setSearchValue(event.target.value);
	}

	return (
		<div className="content">
			<div className="content__header">
				<Title title="Все кроссовки" />
				<Search onChangeSearch={onChangeSearch} />
			</div>

			<div className="catalog">
				{products.length > 0
					? (
						products
							.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map(item => (
								<Card
									key={item.id}
									title={item.title}
									imageUrl={item.imageUrl}
									price={item.price}
									addToCart={product => addToCart(product)}
									addFavourite={product => addFavourite(product)}
								/>
						))
					) : (
						<h2>Товаров нет</h2>
					)}
			</div>
		</div>
	);
}

export default Products;
