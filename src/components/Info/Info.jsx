import { Link } from 'react-router-dom';
import './Info.scss';

function Info({ title, text, imageUrl, action = 'close' }) {
	return (
		<div className="info">
			<img className="info__image" src={imageUrl} alt="Состояние" />
			<div className="info__message">
				<h3 className="info__title">{title}</h3>
				<p className="info__text">{text}</p>
			</div>

			{action === 'close'
				? (
					<button className="button" data-close>
						<span className="button__text">Вернуться назад</span>
					</button>
				) : (
					<Link to="/">
						<button className="button">
							<span className="button__text">Вернуться назад</span>
						</button>
					</Link>
				)}
		</div>
	);
}

export default Info;
