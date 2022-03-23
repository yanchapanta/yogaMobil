import React, { Component } from 'react';

class ciclo16 extends Component {
	constructor(props) {
		super(props);
		//es bueno declararlo si vamos a crear variables de estado,
		//
		//lo primero que se renderiza
		//el constructor puede ser no declarado le pasa el rol
		//a   componentDidMount
		console.log('Contructor');
		this.state = {
			name: ''
		};
	}
	componentDidMount() {
		//es bueno declarar para hacer llamadas al api o cualquier tipo de
		// accion o funcion que el cliente lo requiera
		console.log('did mount');
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate');
		//se ejecuta cuando el componente se actualiza
		//sirve para hacer una operaccion despues de que se cambie un estado
		// no actualizar el estado dentro de este medodo se crallea la aplicacion
	}
	shouldComponentUpdate() {
		// false es para que no se actualize por nada del mundo
		// serve para prevenir renderizaciones inecesarios
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		//sirve para hacer calculos para que luego vayan a componentDidUpdate
		console.log(prevProps, prevState);
		//return 0; esto retorna al component enel snapshot
	}
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={({ target: { value } }) => this.setState({ name: value })}
				/>
			</div>
		);
	}
}

export default ciclo16;
