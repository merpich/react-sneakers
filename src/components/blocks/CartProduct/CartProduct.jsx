import './CartProduct.scss';

function CartProduct({ id, imageUrl, title, price, onRemove }) {
	return (
		<article className="product">
			<img className="product__image" width={70} height={70} src={imageUrl} alt="Sneakers" />
			<div className="product__info">
				<h4 className="product__title">{title}</h4>
				<span className="product__price">{price} руб.</span>
			</div>
			<button className="product__button" onClick={() => onRemove(id)}>
				<svg className="product__icon" width={11} height={11}>
					<use xlinkHref="/img/icons/sprites.svg#plus"></use>
				</svg>
			</button>
		</article>
	);
}

export default CartProduct;
