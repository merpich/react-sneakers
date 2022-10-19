import { Link } from 'react-router-dom';
import './State.scss';

function State({ imageUrl, title, text, action = 'close' }) {
	return (
		<div className="state">
			<img className="state__image" src={imageUrl} alt="Состояние" />
			<div className="state__message">
				<h3 className="state__title">{title}</h3>
				<p className="state__text">{text}</p>
			</div>

			{
				action === 'close'
					? (
						<button className="button" data-close="true">
							<svg className="button__icon button__icon_back" width={16} height={14}>
								<use xlinkHref="/img/icons/sprites.svg#arrow"></use>
							</svg>
							<span className="button__text">Вернуться назад</span>
						</button>
					) : (
						<Link to="/">
							<button className="button">
								<svg className="button__icon button__icon_back" width={16} height={14}>
									<use xlinkHref="/img/icons/sprites.svg#arrow"></use>
								</svg>
								<span className="button__text">Вернуться назад</span>
							</button>
						</Link>
					)
			}
		</div>
	);
}

export default State;
