import Card from "../components/blocks/Card/Card";
import State from "../components/ui/State/State";
import Title from "../components/ui/Title/Title";

function Favourites({ favourites, addFavourite }) {
	return (
		<div className="content">
			{favourites.length > 0
				? (
					<>
						<div className="content__header">
							<Title title="Мои закладки" />
						</div>
						<div className="catalog">
							{favourites.map(item => (
								<Card
									key={item.id}
									favourited={true}
									addFavourite={addFavourite}
									{...item}
								/>
							))}
						</div>
					</>
				) : (
					<State
						imageUrl="/img/icons/empty-favourites.png"
						title="Закладок нет :("
						text="Вы ничего не добавляли в закладки"
						action="back"
					/>
				)}
			{favourites.length > 0
				&& (
					<div className="catalog">
						{favourites.map}
					</div>
				)}
		</div>
	);
}

export default Favourites;
