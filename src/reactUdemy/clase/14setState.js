import ReactDOM from 'react-dom';
import React from 'react';
class MyFirstInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { iisToggleOn: true, name: 'Juan ortiz' };
		// this binding is necessary to make'this' work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	this.setState((prevState) => ({ iisToggleOn:false})); //siempre en falso
	// }
	handleClick() {
		this.setState({
			iisToggleOn: !this.state.iisToggleOn,
			name: this.state.iisToggleOn ? 'Ortiz' : 'Del toro'
		});
	}
	render() {
		// nunca poner un setState dentro de render, setState es palabra reservada
		const { addres, telphone } = this.state;
		console.log(this.state);
		return (
			<div>
				<h2>{this.state.name}</h2>
				<button onClick={this.handleClick}>
					{this.state.iisToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}
ReactDOM.render(<MyFirstInput />, document.getElementById('otherRoot'));
