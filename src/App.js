function App() {
	return (
		<div className="wrapper">
			<div style={{display: 'none'}} className="overlay">
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

			<header className="header">
				<a className="logo" href="/">
					<img className="logo__img" width={40} height={40} src="/img/icons/logo.png" alt="Logo" />
					<div className="logo__text">
						<h3 className="logo__title">React Sneakers</h3>
						<span className="logo__caption">Магазин лучших кроссовок</span>
					</div>
				</a>
				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<svg className="nav__icon nav__icon_cart" width={20} height={20}>
								<use xlinkHref="/img/icons/sprites.svg#cart"></use>
							</svg>
							<div className="nav__cost">1205 руб.</div>
						</li>
						<li className="nav__item">
							<svg className="nav__icon nav__icon_heart" width={20} height={20}>
								<use xlinkHref="/img/icons/sprites.svg#heart"></use>
							</svg>
						</li>
					</ul>
				</nav>
			</header>

			<main className="main">
				<div className="content">
					<div className="content__header">
						<h1 className="title">Все кроссовки</h1>
						<label className="search">
							<svg className="search__icon" width={14} height={14}>
								<use xlinkHref="/img/icons/sprites.svg#search"></use>
							</svg>
							<input className="search__input" type="text" placeholder="Поиск..." />
						</label>
					</div>

					<div className="catalog">
						<article className="card">
							<button className="card__button card__button_like">
								<svg className="card__icon card__icon_like" width={15} height={15}>
									<use xlinkHref="/img/icons/sprites.svg#heart"></use>
								</svg>
							</button>
							<img className="card__img" width={130} height={110} src="/img/sneakers/1.jpg" alt="Sneakers" />
							<h5 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
							<div className="card__info">
								<div className="card__cost">
									<span className="card__price">Цена:</span>
									<span className="card__number">12 999 руб.</span>
								</div>
								<button className="card__button">
									<svg className="card__icon card__icon_plus" width={11} height={11}>
										<use xlinkHref="/img/icons/sprites.svg#plus"></use>
									</svg>
								</button>
							</div>
						</article>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
