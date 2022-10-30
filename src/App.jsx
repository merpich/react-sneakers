import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { getData } from './api/api';
import Catalog from './pages/Catalog';
import Favourites from './pages/Favourites';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

function App() {
	const { setProducts, setCartProducts, setFavouriteProducts,  setLoading, cartOpened } = useContext(AppContext);

	useEffect(() => {
		try {
			async function fetch() {
				const products = await getData('products');
				const cartProducts = await getData('cart');
				const favouriteProducts = await getData('favourites');

				setProducts(products);
				setCartProducts(cartProducts);
				setFavouriteProducts(favouriteProducts);
				setLoading(false);
			}

			fetch();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="wrapper">
			<Header />
			{cartOpened && <Drawer />}
			<div className="main">
				<Routes>
					<Route
						path='/'
						element={ <Catalog /> }
					/>
					<Route
						path='/favourites'
						element={ <Favourites /> }
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
