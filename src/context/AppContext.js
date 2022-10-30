import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [cartProducts, setCartProducts] = useState([]);
	const [favouriteProducts, setFavouriteProducts] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [loading, setLoading] = useState(true);

	function isProductAdded(product_id, items) {
		return items.some(item => item.product_id === product_id)
	}

	const value = {
		products, setProducts,
		cartProducts, setCartProducts,
		favouriteProducts, setFavouriteProducts,
		cartOpened, setCartOpened,
		searchValue, setSearchValue,
		loading, setLoading,
		isProductAdded
	}

	return (
		<AppContext.Provider value={value}>
			{ children }
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };
