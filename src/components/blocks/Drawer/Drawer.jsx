import { useContext, useState } from 'react';
import AppContext from '../../../context';
import State from '../../ui/State/State';
import CartProduct from '../CartProduct/CartProduct';
import './Drawer.scss';

function Drawer({ onClose, onRemove, products = [] }) {
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);
	const { setCartProducts } = useContext(AppContext);

	const onClickOrder = () => {
		setIsOrderCompleted(true);
		setCartProducts([]);
	}

	return (
		<div className="overlay" data-close="true" onClick={onClose}>
			<div className="drawer">
				<div className="drawer__header">
					<h2 className="drawer__title">Корзина</h2>
					<button className="drawer__button" data-close="true">
						<svg className="drawer__icon" width={20} height={20}>
							<use xlinkHref="/img/icons/sprites.svg#plus"></use>
						</svg>
					</button>
				</div>

				{
					products.length > 0
						? (
							<>
								<div className="cart">
									{products.map(item => (
										<CartProduct
											key={item.id}
											id={item.id}
											title={item.title}
											price={item.price}
											imageUrl={item.imageUrl}
											onRemove={id => onRemove(id)}
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

									<button className="button">
										<span className="button__text" onClick={onClickOrder}>Оформить заказ</span>
										<svg className="button__icon" width={16} height={14}>
											<use xlinkHref="/img/icons/sprites.svg#arrow"></use>
										</svg>
									</button>
								</div>
							</>
						) : (
							<State
								imageUrl={isOrderCompleted ? "/img/icons/order.png" : "/img/icons/empty-cart.png"}
								title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
								text="Ваш заказ #18 скоро будет передан курьерской доставке"
								action="close"
							/>
						)
				}
			</div>
		</div>
	);
}

export default Drawer;
