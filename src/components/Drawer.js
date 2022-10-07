function Drawer() {
	return (
		<div className="overlay" style={{display: 'none'}}>
			<div className="drawer">
				<div className="drawer__header">
					<h2 className="drawer__title">Корзина</h2>
					<button className="drawer__button">
						<svg className="drawer__icon" width={20} height={20}>
							<use xlinkHref="/img/icons/sprites.svg#plus"></use>
						</svg>
					</button>
				</div>

				<div className="cart">
					<article className="cart-item">
						<img className="cart-item__image" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
						<div className="cart-item__info">
							<h4 className="cart-item__title">Мужские Кроссовки Nike Air Max 270</h4>
							<span className="cart-item__price">12 999 руб.</span>
						</div>
						<button className="cart-item__button">
							<svg className="cart-item__icon" width={11} height={11}>
								<use xlinkHref="/img/icons/sprites.svg#plus"></use>
							</svg>
						</button>
					</article>
					<article className="cart-item">
						<img className="cart-item__image" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
						<div className="cart-item__info">
							<h4 className="cart-item__title">Мужские Кроссовки Nike Air Max 270</h4>
							<span className="cart-item__price">12 999 руб.</span>
						</div>
						<button className="cart-item__button">
							<svg className="cart-item__icon" width={11} height={11}>
								<use xlinkHref="/img/icons/sprites.svg#plus"></use>
							</svg>
						</button>
					</article>
				</div>

				<div className="total">
					<ul className="total__info">
						<li className="total__item">
							<span className="total__text">Итого:</span>
							<div className="total__dashed"></div>
							<span className="total__price">21 498 руб.</span>
						</li>
						<li className="total__item">
							<span className="total__text">Налог 5%:</span>
							<div className="total__dashed"></div>
							<span className="total__price">1074 руб.</span>
						</li>
					</ul>
					<button className="button">
						<span className="button__text">Оформить заказ</span>
						<svg className="button__icon" width={16} height={14}>
							<use xlinkHref="/img/icons/sprites.svg#arrow"></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
