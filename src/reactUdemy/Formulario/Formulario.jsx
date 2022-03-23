import React, { useState } from 'react';

const Formulario = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [islogged, setIslogged] = useState(false);
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		setIslogged(true);
	};
	const handlePasswordChange = ({ target: { value } }) => setPassword(value);
	const handleFormSubmit = (event) => {
		//para que no se carge la pagina
		event.preventDefault();
		console.log('Datos sucesses', email, password);
	};
	return (
		<div>
			02Formulario
			<form onSubmit={handleFormSubmit}>
				<h2>Iniciar session</h2>
				<label>
					Correo
					<input type="email" value={email} onChange={handleEmailChange} />
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<input type="submit" value="Enviar data" />
			</form>
			{islogged && <h2>Esta logeado</h2>}
		</div>
	);
};

export default Formulario;
