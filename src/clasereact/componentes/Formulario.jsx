import { React, Fragment, useState } from 'react';

function Formulario() {
	const [nombre, setNombre]=useState('')
	const [edad, setEdad]=useState('')
	const validate=(e)=>{
		e.preventDefault();
		if (!nombre.trim('')) {
			
			console.log('vacio nombre');
			return
		}
		if (!edad.trim('')) {
			
			console.log('vacio edad');
			return
		}
	}

	const arra1=[1,2,3,4]
	const arra2=[5,6,7,8,9]
	const array3=[...arra1,...arra2]
	return (
		<Fragment>
			<div className="container">
				<form onSubmit={validate} action="#">
					<input
						placeholder="Introduce nombre"
						type="text"
						className="form-control mb-3"
						onChange={(e)=>{setNombre(e.target.value)}}
					/>
					<input
						placeholder="Introduce edad"
						type="text"
						className="form-control mb-3"
						onChange={(e)=>{setEdad(e.target.value)}}
					/>
					<input type="submit" className="btn btn-info btn-block mb-3" />
				</form>
			</div>
			imprimiendo array <br />
			{array3}
		</Fragment>
	);
}

export default Formulario;
