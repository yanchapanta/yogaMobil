import './App.scss';
import './pages/sass/general.scss';
import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
//fecha
import DateObject from 'react-date-object';

import Home from './pages/Home/Home';
// import Date from './pages/Home/complement/Date/Date';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// import Interfaz from './pages/Interfaz';
import Main from './reactUdemy/Main';
import { add } from 'date-fns';

function App() {
	//simulacion de boton

	const [modelogin, setModelogin] = useState(false);
	const [clicklogin, setClicklogin] = useState(false);
	const [clicksignup, setClicksignup] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	// const [isHours, setIsHours] = useState('');
	// const [isMinute, setIsMinute] = useState('');

	let date = new DateObject();
	// console.log(date.format("YYYY/MM/DD hh:mm:ss.SSS a"));
	const [isHoursfull, setIsHoursFull] = useState(date.format('HH:mm:ss'));

	const validateForm = (e) => {
		e.preventDefault();

		if (!email.trim('') && email !== 'marco@gmail.com') {
			setError('* Valores invalidos en gmail');
			return;
		}

		if (!password.trim('') && password !== '123') {
			setError('* Valores invalidos en password');
			return;
		}
		if (email === 'marco@gmail.com' && password === '123') {
			setModelogin(true);
			setClicklogin(false);

			setClicksignup(true);
			// window.location.href='/'
		} else {
			setError('* email o password no son correctos!');
		}
	};

	const validateColor = () => {
		console.log('as click today');
	};

	//Validar Hora
	const validateHours = () => {
		let hours = new Date().getHours();
		let minute = new Date().getMinutes();

		//colores
		let colors = '';
		if ((hours >= 16 && minute >= 30) || (hours <= 4 && minute <= 29)) {
			colors = 'bg-main';
		}
		return colors;
	};
	useEffect(() => {
		setInterval(() => {
			date = new DateObject();
			setIsHoursFull(date.format('HH:mm:ss'));
			// setIsMinute(new Date().getMinutes());
			// setIsHours(new Date().getHours());
		}, 1000);
		return validateHours;
	}, []);
	const objetColor = [
		{
			id: '01',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 35,
			color: 'yellow'
		},
		{
			id: '02',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 37,
			color: 'green'
		},
		{
			id: '03',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 51,
			color: 'var(--second-background)'
		}
	];
	const addColor = () => {
		// console.log(objetColor[0].color);
		let color = '';

		let hours = new Date().getHours();
		let minute = new Date().getMinutes();
		let idColor = '03';
		let colorChoose = objetColor.filter((item) => item.id === idColor);
		console.log(colorChoose[0].color);
		if (
			hours >= colorChoose[0].startHours &&
			minute >= colorChoose[0].startMinutes &&
			hours <= colorChoose[0].endHours &&
			minute <= colorChoose[0].endMinutes
		) {
			color = colorChoose[0].color;
		}
		return color;
	};
	return (
		<Fragment>
			<Main />
			<div className={validateHours() + ' '} style={{ background: addColor() }}>
				<div>
					<h1>Hello, world! {isHoursfull}</h1>
				</div>
				<Routes>
					<Route exact path="/">
						<Home
							modelogin={modelogin}
							clicklogin={clicklogin}
							clicksignup={clicksignup}
							email={email}
							password={password}
							error={error}
							setModelogin={setModelogin}
							setClicklogin={setClicklogin}
							setClicksignup={setClicksignup}
							setEmail={setEmail}
							setPassword={setPassword}
							setError={setError}
							validateForm={validateForm}
						/>
					</Route>
					<Route path="/login/:validate">
						<Login
							modelogin={modelogin}
							clicklogin={clicklogin}
							clicksignup={clicksignup}
							email={email}
							password={password}
							error={error}
							setModelogin={setModelogin}
							setClicklogin={setClicklogin}
							setClicksignup={setClicksignup}
							setEmail={setEmail}
							setPassword={setPassword}
							setError={setError}
							validateForm={validateForm}
						/>
					</Route>
					<Route path="/password-recovery">
						<PasswordRecovery setClicklogin={setClicklogin} />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
				</Routes>
			</div>
		</Fragment>
	);
}

export default App;
/*
// url actual
	let urlCurrent = window.location.href;
	urlCurrent = urlCurrent.includes('login');
*/
