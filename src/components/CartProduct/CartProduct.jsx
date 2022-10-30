import { useContext } from 'react';
import { deleteData } from '../../api/api';
import { AppContext } from '../../context/AppContext';
import './CartProduct.scss';

function CartProduct({ product_id, title, price, imageUrl}) {
	const { setCartProducts } = useContext(AppContext);

	async function removeCartProduct() {
		try {
			await deleteData('cart', product_id);
			setCartProducts(prev => prev.filter(item => item.product_id !== product_id));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<article className="product">
			<img className="product__image" width={70} height={70} src={imageUrl} alt="Sneakers" />
			<div className="product__info">
				<h4 className="product__title">{title}</h4>
				<span className="product__price">{price} руб.</span>
			</div>
			<button className="product__button" onClick={removeCartProduct}>
				<svg className="product__icon" width={11} height={11}>
					<use xlinkHref="/img/icons/sprites.svg#plus"></use>
				</svg>
			</button>
		</article>
	);
}

export default CartProduct;
