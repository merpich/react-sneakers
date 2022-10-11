import { useState } from 'react';
import './Card.scss';

function Card({ title, imageUrl, price, onLike, onPlus }) {
	const [isAdded, setIsAdded] = useState(false);

	const handlePlus = () => {
		onPlus({title, imageUrl, price});
		setIsAdded(!isAdded);
	}

	return (
		<article className="card">
			<button className="card__button card__button_like" onClick={onLike}>
				<svg className="card__icon card__icon_like" width={15} height={15}>
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
					className={isAdded
								? 'card__button card__button_checked'
								: 'card__button'}
					onClick={handlePlus}>
					<svg
						className={isAdded
							? 'card__icon card__icon_checked'
							: 'card__icon card__icon_plus'}
						width={11}
						height={11}
					>
						<use
							xlinkHref={isAdded
								? '/img/icons/sprites.svg#checked'
								: '/img/icons/sprites.svg#plus'}
						></use>
					</svg>
				</button>
			</div>
		</article>
	);
}

export default Card;
