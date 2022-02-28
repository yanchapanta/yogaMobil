/**
 * los componentes permiten separar la interfaz de usuario en piezas independientes
reutilizables y pensar en cada pieza de forma aislada
 */
// functional component
//si un component no regresa nada es indefinido
function HelloWorld(props) {
	return <h1> Hello, {props.name}</h1>;
}
const HelloWorld = ({ name }, props) => (
	<div>
		<h1> hello, {props.name}</h1>
	</div>
);

//class component
//this.props ya existe
class Welcome extends React.Component {
	render() {
		return <h1> Hello, {this.props.name}</h1>;
	}
}
<div>
	<HelloWorld />
	<Welcome />
</div>;

/**
 * PROPS
 - Solo lectura
 - Van de padre a hijo
 - Puedes enviar cualquier tipo dato como propiedad
 */
//props
function HelloWorld({name,lastName}) {
    return <h1>Hellow, {name}</h1>    
}
<div>
    <HelloWorld name='JUan' lastName='Ortega'/>
    <HelloWorld name='Marco Yanchapanta' />
</div>
//o
const props={
    name:'Juan Martinez'
}
<HelloWorld {...props} />
//interpreta
<HelloWorld name='JUan' lastName='Ortega'/>
