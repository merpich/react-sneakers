import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './Header.scss';

function Header() {
	const { setCartOpened, cartProducts } = useContext(AppContext);

	const totalPrice = cartProducts.reduce((sum, item) => item.price + sum, 0);

	function openCart() {
		setCartOpened(true);
	}

	return (
		<header className="header">
			<NavLink to="/">
				<div className="logo">
					<img className="logo__img" width={40} height={40} src="/img/icons/logo.png" alt="Logo" />
					<div className="logo__text">
						<h3 className="logo__title">React Sneakers</h3>
						<span className="logo__caption">Магазин лучших кроссовок</span>
					</div>
				</div>
			</NavLink>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<button className="nav__button" onClick={openCart}>
							<svg className="nav__icon nav__icon_cart" width={20} height={20}>
								<use xlinkHref="/img/icons/sprites.svg#cart"></use>
							</svg>
							<span className="nav__cost">{totalPrice} руб.</span>
						</button>
					</li>
					<li className="nav__item">
						<NavLink to="/favourites">
							<button className="nav__button">
								<svg className="nav__icon nav__icon_heart" width={20} height={20}>
									<use xlinkHref="/img/icons/sprites.svg#heart"></use>
								</svg>
							</button>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
