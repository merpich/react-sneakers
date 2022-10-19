import './Search.scss';

function Search({ onChangeSearch }) {
	return (
		<label className="search">
			<svg className="search__icon" width={14} height={14}>
				<use xlinkHref="/img/icons/sprites.svg#search"></use>
			</svg>
			<input
				className="search__input"
				type="text"
				placeholder="Поиск..."
				onChange={onChangeSearch}
			/>
		</label>
	);
}

export default Search;
