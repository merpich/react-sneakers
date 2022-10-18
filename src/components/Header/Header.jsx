import './Header.scss';

function Header(props) {
	return (
		<header className="header">
			<div className="logo">
				<img className="logo__img" width={40} height={40} src="/img/icons/logo.png" alt="Logo" />
				<div className="logo__text">
					<h3 className="logo__title">React Sneakers</h3>
					<span className="logo__caption">Магазин лучших кроссовок</span>
				</div>
			</div>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<button className="nav__button" onClick={props.onClickCart}>
							<svg className="nav__icon nav__icon_cart" width={20} height={20}>
								<use xlinkHref="/img/icons/sprites.svg#cart"></use>
							</svg>
							<span className="nav__cost">1205 руб.</span>
						</button>
					</li>
					<li className="nav__item">
						<button className="nav__button">
							<svg className="nav__icon nav__icon_heart" width={20} height={20}>
								<use xlinkHref="/img/icons/sprites.svg#heart"></use>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
