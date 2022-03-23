import React from 'react';
import Routes from './routes';
import PokemonProvider from './context/pokemos/Provider';
const demoApp = () => {
	return (
		<PokemonProvider>
			<Routes />
		</PokemonProvider>
	);
};
export default demoApp;
