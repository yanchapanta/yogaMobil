import { useState, useEffect } from 'react';
import './styles.scss';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import axios from 'axios';
export default function Search() {
	const [isAtTop, setIsAtTop] = useState(false);
	const [results, setResults] = useState([]);
	const [data, setData] = useState([]);

	//FETCH
	/*
		useEffect(() => {
			const getUsers = async () => {
				//FORMA UNO
				// fetch('https://jsonplaceholder.typicode.com/users')
				// 	.then((response) => response.json())
				// 	.then((data) => {
				// 		setData(data);
				// 	});
				//FORMA DOS

				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				);
				const data = await response.json();
				setData(data);
			};

			getUsers().catch(null);
		});
	*/
	//AXIOS
	useEffect(() => {
		const getUsers = async () => {
			try {
				const { data } = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				);
				setData(data);
			} catch (error) {
				console.log(error);
			}
		};

		getUsers().catch(null);
	});
	const handleCloseSearch = () => {
		setIsAtTop(false);
		setResults([]);
	};
	const handleSearchClick = (searchText) => {
		setIsAtTop(true);
		if (data?.length) {
			const searchTextMinus = searchText.toLowerCase();
			const filteredData = data.filter((value) => {
				return (
					value.name.toLowerCase().includes(searchTextMinus) ||
					value.phone.toLowerCase().includes(searchTextMinus) ||
					value.email.toLowerCase().includes(searchTextMinus) ||
					value.username.toLowerCase().includes(searchTextMinus)
				);
			});

			console.log(filteredData);
			setResults(filteredData);
		}
	};
	return (
		<div className={`search ${isAtTop ? 'search--top' : 'search--center'}`}>
			<SearchBox
				onSearch={handleSearchClick}
				onClose={handleCloseSearch}
				isSearching={isAtTop}
			/>
			<SearchResults results={results} isSearching={isAtTop} />
		</div>
	);
}
