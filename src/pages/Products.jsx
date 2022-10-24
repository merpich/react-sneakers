import Title from '../components/ui/Title/Title';
import Search from '../components/ui/Search/Search';
import Card from '../components/blocks/Card/Card';

function Products({ products, addToCart, addFavourite, searchValue, onChangeSearch, isLoading }) {
	const renderItems = () => {
		const filteredProducts = products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
		return (isLoading ? [...Array(4).fill({})] : filteredProducts).map(item => (
			<Card
				key={item.id}
				addToCart={product => addToCart(product)}
				addFavourite={product => addFavourite(product)}
				loading={isLoading}
				{...item}
			/>
		));
	}

	return (
		<div className="content">
			<div className="content__header">
				<Title title="Все кроссовки" />
				<Search onChangeSearch={onChangeSearch} />
			</div>

			<div className="catalog">
				{renderItems()}
			</div>
		</div>
	);
}

export default Products;
