import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Search.scss';

function Search() {
	const { setSearchValue } = useContext(AppContext);

	function changeSearch(event) {
		const value = event.target.value;
		setSearchValue(value);
	}

	return (
		<label className="search">
			<svg className="search__icon" width={14} height={14}>
				<use xlinkHref="/img/icons/sprites.svg#search"></use>
			</svg>
			<input
				className="search__input"
				type="text"
				placeholder="Поиск..."
				onChange={changeSearch}
			/>
		</label>
	);
}

export default Search;
