import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Title from '../components/Title/Title';
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import Info from '../components/Info/Info';

function Favourites() {
	const { favouriteProducts, loading } = useContext(AppContext);

	return (
		<div className="content">
			<div className="content__header">
				<Title title="Избранное" />
			</div>

			{loading
				? (
					<Loader />
				) : (
					favouriteProducts.length > 0
						? (
							<div className="catalog">
								{favouriteProducts.map(item => (
									<Card
										key={item.id}
										{...item}
									/>
								))}
							</div>
						) : (
							<Info
								title="Избранного нет :("
								text="Вы ничего не добавили в избранное"
								imageUrl="/img/icons/empty-favourites.png"
								action="back"
							/>
						)
				)}
		</div>
	);
}

export default Favourites;
