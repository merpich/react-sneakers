import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Title from '../components/Title/Title';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import Loader from '../components/Loader/Loader';

function Catalog() {
	const { products, searchValue, loading } = useContext(AppContext);

	return (
		<div className="content">
			<div className="content__header">
				<Title title="Все кроссовки" />
				<Search />
			</div>

			{loading
				? (
					<Loader />
				) : (
					<div className="catalog">
						{products
							.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map(item => (
								<Card
									key={item.product_id}
									{...item}
								/>
							))}
					</div>
				)}
		</div>
	);
}

export default Catalog;
