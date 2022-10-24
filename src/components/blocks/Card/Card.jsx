import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../../context';
import './Card.scss';

function Card({ id, title, imageUrl, price, addToCart, addFavourite, favourited = false, loading = false }) {
	const { isProductAdded } = useContext(AppContext);
	const [isFavourite, setIsFavourite] = useState(favourited);

	const onPlus = () => {
		addToCart({ id, title, imageUrl, price });
	}

	const onLike = () => {
		addFavourite({id, title, imageUrl, price});
		setIsFavourite(!isFavourite);
	}

	return (
		<article className="card">
			{loading ? (
				<ContentLoader
					speed={2}
					height={206}
					style={{width: "100%"}}
					viewBox="0 0 150 206"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="0" y="0" rx="10" ry="10" width="150" height="110" />
					<rect x="0" y="125" rx="5" ry="5" width="150" height="17" />
					<rect x="0" y="145" rx="5" ry="5" width="100" height="17" />
					<rect x="0" y="173" rx="5" ry="5" width="80" height="32" />
					<rect x="118" y="173" rx="5" ry="5" width="32" height="32" />
				</ContentLoader>
			) : (
				<>
					<button
						className={`card__button card__button_like ${isFavourite && 'card__button_like_active'}`}
						onClick={onLike}
					>
						<svg
							className={`card__icon card__icon_like ${isFavourite && 'card__icon_like_active'}`}
							width={15}
							height={15}
						>
							<use xlinkHref="/img/icons/sprites.svg#heart"></use>
						</svg>
					</button>

					<img className="card__img" width={130} height={110} src={imageUrl} alt="Sneakers" />
					<h5 className="card__title">{title}</h5>
					<div className="card__info">
						<div className="card__cost">
							<span className="card__price">Цена:</span>
							<span className="card__number">{price} руб.</span>
						</div>

						<button
							className={`card__button ${isProductAdded(id) && 'card__button_checked'}`}
							onClick={onPlus}
						>
							<svg
								className={`card__icon ${isProductAdded(id) ? 'card__icon_checked' : 'card__icon_plus'}`}
								width={11}
								height={11}
							>
								<use xlinkHref={isProductAdded(id) ? '/img/icons/sprites.svg#checked' : '/img/icons/sprites.svg#plus'}></use>
							</svg>
						</button>
					</div>
				</>
			)}
		</article>
	);
}

export default Card;
