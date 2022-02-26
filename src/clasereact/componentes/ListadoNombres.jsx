import React, { Fragment, useState } from 'react';
import uniquid from 'uniqid';

function ListadoNombres() {
	const [nombre, setNombre] = useState('');
	const [listadonombres, setListadonombres] = useState([]);
	const [error, setError] = useState(null);
	const addNombres = (e) => {
		e.preventDefault();
		if (!nombre.trim()) {
			setError('El campo no esta vacio');
			return;
		}
		const nuevoNombre = {
			id: uniquid(),
			tituloNombre: nombre
		};
		setListadonombres([...listadonombres, nuevoNombre]);
		setNombre('');
		setError(null);
	};
	const deleteNombre = (id) => {
		const nuevaArray = listadonombres.filter((item) => item.id !== id);
		setListadonombres(nuevaArray);
	};

	const [modoedicion, setModoedicion] = useState(false);
	const [id, setId] = useState('');
	//para boton
	const editar = (item) => {
		setModoedicion(true);
		setNombre(item.tituloNombre);
		setId(item.id);
	};
	const editarNombre = (e) => {
		e.preventDefault();
		const NuevoArray = listadonombres.map((item) =>
			item.id === id ? { id: id, tituloNombre: nombre } : item
		);
		setListadonombres(NuevoArray);
		setModoedicion(false);
		setNombre('');
	};

	return (
		<Fragment>
			<h2>Aplicación crud basica</h2>
			<div className="row">
				<div className="col">
					<h2>Listado de nombres</h2>
					<ul className="list-group">
						{listadonombres.map((item) => (
							<li key={item.id} className="list-group-item">
								user.- {item.tituloNombre}
								<button
									className="btn btn-danger float-right"
									style={{ float: 'right' }}
									onClick={() => {
										deleteNombre(item.id);
									}}
								>
									BORRAR
								</button>
								<button
									className="btn btn-danger float-right"
									style={{ float: 'right' }}
									onClick={() => {
										editar(item);
									}}
								>
									EDITAR
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col">
					<h2>Formulario para añadir nombres</h2>
					<form
						onSubmit={modoedicion ? editarNombre : addNombres}
						action="#"
						className="form-group"
					>
						<input
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							className="form-control mb-3"
							type="text"
							placeholder="Introduce el nombre"
						/>
						<input
							className="btn btn-info btn-block"
							type="submit"
							placeholder="Regitrar nombre"
							value={modoedicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}
						/>
					</form>
					{error != null ? (
						<div className="alert alert-danger">{error}</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</Fragment>
	);
}

export default ListadoNombres;
