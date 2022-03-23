import { useState } from 'react';
import './styles.scss';

export default function SearchBox({ onSearch, onClose, isSearching }) {
	const [searchtext, setSearchtext] = useState('');
	const handleSearchClick = () => {
		setSearchtext('');
		onClose();
	};
	return (
		<div className="search">
			<h2 className="search-box-title">Buscador de personal</h2>
			<div className="search-box-buttons">
				<label>
					<input
						type="text"
						value={searchtext}
						onChange={({ target: { value } }) => setSearchtext(value)}
						className="search-box-input"
					/>
				</label>
				<button
					onClick={() => onSearch(searchtext)}
					disabled={!searchtext.length}
				>
					Buscador
				</button>
				{isSearching && (
					<button
						onClick={() => handleSearchClick}
						disabled={!searchtext.length}
					>
						Cerrar
					</button>
				)}
			</div>
		</div>
	);
}
