import { useState } from 'react';
import './Card.scss';

function Card({ id, title, imageUrl, price, addToCart, addFavourite, favourited = false }) {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavourite, setIsFavourite] = useState(favourited);

	const onPlus = () => {
		addToCart({ title, imageUrl, price });
		setIsAdded(!isAdded);
	}

	const onLike = () => {
		addFavourite({id, title, imageUrl, price});
		setIsFavourite(!isFavourite);
	}

	return (
		<article className="card">
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
					className={`card__button ${isAdded && 'card__button_checked'}`}
					onClick={onPlus}
				>
					<svg
						className={`card__icon ${isAdded ? 'card__icon_checked' : 'card__icon_plus'}`}
						width={11}
						height={11}
					>
						<use xlinkHref={isAdded ? '/img/icons/sprites.svg#checked' : '/img/icons/sprites.svg#plus'}></use>
					</svg>
				</button>
			</div>
		</article>
	);
}

export default Card;
