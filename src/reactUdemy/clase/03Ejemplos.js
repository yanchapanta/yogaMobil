import ReactDOM from 'react-dom';
import React from 'react';

/*
class MyFirstInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'juan',
			lastName: 'ortiz',
			addres: 'Quito / Guamani',
			telphone: '0968867385'
		};
	}
	// getFullName(){}
	getFullName = () => {
		const { addres, telphone } = this.state;
		return this.state.lastName + 'mi direccion es: ' + addres;
	};
	render() {
		const { addres, telphone } = this.state;
		console.log(this.state);
		return (
            <div>
            Hola {this.getFullName()} y mi telfono es: {telphone}
			</div>
            );
        }
    }
    */

// FUNCCION
function MyFirstInput() {
	const [name] = React.useState('Marco');
	const [lastName] = React.useState('Delgado');
	// const getFullName(){
	//     return name + " - " + lastName;
	// }
	// const { addres, telphone } = this.state;
	return <div>Hola {getFullName()}</div>;
}
ReactDOM.render(<MyFirstInput />, document.getElementById('otherRoot'));
