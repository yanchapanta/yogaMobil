//INFORMACION QUE VA DENTRO DE APP.JSX para tener acceso a esos metodos
import PokemonContext from './index'; //export el contexto

export default function PokemonProvider({ children }) {
	return (
		<PokemonContext.Provider value={{ showAlert: () => alert(10) }}>
			{children}
		</PokemonContext.Provider>
	);
}
//children es una buena practica
