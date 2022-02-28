import React, { useState } from 'react';
import './Login.scss';
import Title from './Components/Title/Title';
import Label from './Components/Label/Label';
import Input from './Components/Input/Input';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const Login = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [passworderror, setPassworderror] = useState(false);
	const [islogin, setIslogin] = useState(false);
	const [haserror, setHaserror] = useState(false);

	const handleChange = (name, value) => {
		if (name === 'usuario') {
			setUser(value);
			setHaserror(false);
		} else {
			if (password.length > 6) {
				setHaserror(false);
				setPassworderror(true);
			} else {
				setHaserror(false);
				setPassworderror(false);
				setPassword(value);
			}
		}
	};

	function ifMatch(param) {
		if (param.user.length > 0 && param.password.length > 0) {
			if (param.user === 'marco' && param.password === '123') {
				const { user, password } = param;
				let ac = { user, password };
				let account = JSON.stringify(ac);
				localStorage.setItem('account', account);
				setIslogin(true);
			} else {
				setIslogin(false);
				setHaserror(true);
			}
		} else {
			setIslogin(false);
			setHaserror(true);
		}
	}
	function handleSubmit() {
		console.log('submits hiiiiiiiiii');
		let account = { user, password };
		if (account) {
			ifMatch(account);
		}
	}
	return (
		<div className="login-container">
			{islogin ? (
				<div className="general">
					<h1>!hola,{user}</h1>
					<label> Felicidades, estas logueado..</label>
				</div>
			) : (
				<div className="login-content">
					<Title text="Soy un titulo" />
					{haserror && (
						<label className="label-alert">
							Su contrasenia o usuario son incorrectos o no existen en nuestra
							plataforma
						</label>
					)}
					<Label text="Usuario" />
					<Input
						attribute={{
							id: 'usuario',
							name: 'usuario',
							type: 'text',
							placeholder: 'Ingrese su usuario'
						}}
						handleChange={handleChange}
					/>
					<Label text="Contraseña" />
					<Input
						attribute={{
							id: 'password',
							name: 'password',
							type: 'password',
							placeholder: 'Ingrese su contraseña'
						}}
						handleChange={handleChange}
						param={passworderror}
					/>
					{passworderror && (
						<label className="label-error">
							Contrasenia invalida o incompleta
						</label>
					)}
					<button onClick={() => handleSubmit()}>Ingresar</button>
				</div>
			)}
		</div>
	);
};

export default Login;
