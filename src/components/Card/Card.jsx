import './Card.scss';

function Card(props) {
	return (
		<article className="card">
			<button className="card__button card__button_like">
				<svg className="card__icon card__icon_like" width={15} height={15}>
					<use xlinkHref="/img/icons/sprites.svg#heart"></use>
				</svg>
			</button>
			<img className="card__img" width={130} height={110} src={props.imageUrl} alt="Sneakers" />
			<h5 className="card__title">{props.title}</h5>
			<div className="card__info">
				<div className="card__cost">
					<span className="card__price">Цена:</span>
					<span className="card__number">{props.price} руб.</span>
				</div>
				<button className="card__button" onClick={props.onClick}>
					<svg className="card__icon card__icon_plus" width={11} height={11}>
						<use xlinkHref="/img/icons/sprites.svg#plus"></use>
					</svg>
				</button>
			</div>
		</article>
	);
}

export default Card;
