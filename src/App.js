import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	return (
		<div className="wrapper">
			<Drawer />
			<Header />

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
						<Card />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
