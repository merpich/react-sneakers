import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import CartProduct from '../CartProduct/CartProduct';
import Loader from '../Loader/Loader';
import Info from '../Info/Info';
import './Drawer.scss';
import { postData, replaceData } from '../../api/api';

function Drawer() {
	const { cartProducts, setCartProducts, setCartOpened, loading } = useContext(AppContext);
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [orderLoad, setOrderLoad] = useState(false);

	function closeCart(event) {
		const target = event.target;

		if (target.dataset.close || target.closest('button[data-close]')) {
			setCartOpened(false);
		}
	}

	async function createOrder() {
		try {
			setOrderLoad(true);
			const order = await postData('orders', {items: cartProducts});
			await replaceData('cart', []);
			setOrderLoad(false);

			setOrderId(order.id);
			setIsOrderCompleted(true);
			setCartProducts([]);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="overlay" onClick={closeCart} data-close>
			<div className="drawer">
				<div className="drawer__header">
					<h2 className="drawer__title">Корзина</h2>
					<button className="drawer__button" data-close>
						<svg className="drawer__icon" width={20} height={20}>
							<use xlinkHref="/img/icons/sprites.svg#plus"></use>
						</svg>
					</button>
				</div>

				{loading
					? (
						<Loader />
					) : (
						cartProducts.length > 0
							? (
								<>
									<div className="cart">
										{cartProducts.map(item => (
											<CartProduct
												key={item.id}
												{...item}
											/>
										))}
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

										<button className="button" disabled={orderLoad}>
											<span className="button__text" onClick={createOrder}>Оформить заказ</span>
											<svg className="button__icon" width={16} height={14}>
												<use xlinkHref="/img/icons/sprites.svg#arrow"></use>
											</svg>
										</button>
									</div>
								</>
							): (
								<Info
									title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
									text={isOrderCompleted ?`Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
									imageUrl={isOrderCompleted ? "/img/icons/order.png" : "/img/icons/empty-cart.png"}
									action="close"
								/>
							)
					)}
			</div>
		</div>
	);
}

export default Drawer;
