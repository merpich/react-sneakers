import { useContext } from 'react';
import { deleteData, postData } from '../../api/api';
import { AppContext } from '../../context/AppContext';
import './Card.scss';

function Card({ product_id, title, price, imageUrl }) {
	const { cartProducts, favouriteProducts, setCartProducts, setFavouriteProducts, isProductAdded } = useContext(AppContext);

	const product = { product_id, title, price, imageUrl };

	async function addToCart() {
		try {
			if (cartProducts.find(item => item.product_id === product_id)) {
				await deleteData('cart', product_id);
				setCartProducts(prev => prev.filter(item => item.product_id !== product_id));
			} else {
				const data = await postData('cart', product);
				setCartProducts(prev => [...prev, data]);
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function addToFavourites() {
		try {
			if (favouriteProducts.find(item => item.product_id === product_id)) {
				await deleteData('favourites', product_id);
				setFavouriteProducts(prev => prev.filter(item => item.product_id !== product_id));
			} else {
				const data = await postData('favourites', product);
				setFavouriteProducts(prev => [...prev, data]);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<article className="card">
			<button
				className={`card__button card__button_like ${isProductAdded(product_id, favouriteProducts) && 'card__button_like_active'}`}
				onClick={addToFavourites}
			>
				<svg
					className={`card__icon card__icon_like ${isProductAdded(product_id, favouriteProducts) && 'card__icon_like_active'}`}
					width={15}
					height={15}
				>
					<use xlinkHref="/img/icons/sprites.svg#heart"></use>
				</svg>
			</button>

			<img className="card__image" width={130} height={110} src={imageUrl} alt="Sneakers" />
			<h5 className="card__title">{title}</h5>
			<div className="card__info">
				<div className="card__cost">
					<span className="card__price">Цена:</span>
					<span className="card__number">{price} руб.</span>
				</div>

				<button
					className={`card__button ${isProductAdded(product_id, cartProducts) && 'card__button_checked'}`}
					onClick={addToCart}
				>
					<svg
						className={`card__icon ${isProductAdded(product_id, cartProducts) ? 'card__icon_checked' : 'card__icon_plus'}`}
						width={11}
						height={11}
					>
						<use xlinkHref={isProductAdded(product_id, cartProducts) ? '/img/icons/sprites.svg#checked' : '/img/icons/sprites.svg#plus'}></use>
					</svg>
				</button>
			</div>
		</article>
	);
}

export default Card;
