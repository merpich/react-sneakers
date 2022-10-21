import Title from '../components/ui/Title/Title';
import Search from '../components/ui/Search/Search';
import Card from '../components/blocks/Card/Card';

function Products({ products, addToCart, addFavourite, searchValue, onChangeSearch }) {
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
									addToCart={product => addToCart(product)}
									addFavourite={product => addFavourite(product)}
									{...item}
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
