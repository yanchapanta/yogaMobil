import React, { useState, Fragment } from 'react';

function Practica1() {
	const [num, setNum] = useState([
		'uno',
		'dos',
		'tres',
		'cuatro',
		'cinco',
		'seis',
		'siete',
		'ocho',
		'nuevo'
	]);
	const [cont, setCont] = useState(num.length);
	console.log(typeof num.length);

	const subir = () => {
		setCont(cont + 1);
		num.push(cont);
	};
	const bajar = () => {
		setCont(cont + -1);
		num.pop();
	};
	// formulario
	const [nombre,setNombre]=useState('')
	const [password,setPassword]=useState('')
	const [error,setError]=useState(false)
	const validate = (e) => {
		e.preventDefault()
		
		if (!nombre.trim('')) {
			setError(true)
			return
		}
		if (!password.trim('')) {
			setError(true)
			return
		}
	};
	return (
		<Fragment>
			<div className="container">
				<h1> Practica1 </h1>

				<h2>Mis botones</h2>
				<h3>Cuantos botones quieres mostrar?</h3>
				{num.map((item, index) => (
					<button key={index} type="button" class="btn btn-primary m-1">
						{item}
					</button>
				))}
				<br />
				<button onClick={bajar}>muestrame menos </button>
				<button type="button" class="btn btn-success m-1">
					{cont}
				</button>
				<button onClick={subir}>muestrame mas </button>

				<h3>Mostrando formulario</h3>
				<form onSubmit={validate} action="#" className="form">
					<span className='small text-warning'>{error===true?'valores invalidos':''}</span>
					<br />
					<input onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder="Ingrese nombre" />
					<input
						onChange={(e)=>{setPassword(e.target.value)}}
						type="password"
						placeholder="Ingrese contrase¶a"
					/>
					<input type="submit" value="Enviar" />
				</form>
			</div>
		</Fragment>
	);
}

export default Practica1;
