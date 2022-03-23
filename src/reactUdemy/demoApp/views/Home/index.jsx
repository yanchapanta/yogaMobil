import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemos';
export default function Home() {
	const { showAlert } = useContext(PokemonContext);
	useEffect(() => {
		showAlert();
	}, []);
	return <div>home</div>; 
}
