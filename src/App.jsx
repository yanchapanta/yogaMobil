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
import RegisterTime from './pages/time/RegisterTime';
// import Interfaz from './pages/Interfaz';
import Main from './reactUdemy/Main';

function App() {
	//LOGIN

	const [modelogin, setModelogin] = useState(false);
	const [clicklogin, setClicklogin] = useState(false);
	const [clicksignup, setClicksignup] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [minOn, setMinOn] = useState(false);
	//entrada color tema
	const [listColorTeme, setListColorTeme] = useState([]);
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

	const validateColor = () => {};
	//HORA NOCHE DIA
	//Validar Hora
	const validateHours = () => {
		let hours = new Date().getHours();
		let minute = new Date().getMinutes();

		//colores
		let colors = '';
		if ((hours >= 16 && minute >= 30) || (hours <= 4 && minute <= 30)) {
			colors = 'bg-main';
		}
		return colors;
	};
	useEffect(() => {
		setInterval(() => {
			date = new DateObject();
			setIsHoursFull(date.format('HH:mm:ss'));
		}, 1000);
		return validateHours;
	}, []);
	const objetColor = [
		{
			id: '01',
			weekday: 'monday',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 35,
			color: 'yellow'
		},
		{
			id: '02',
			weekday: 'tuesday',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 37,
			color: 'green'
		},
		{
			id: '03',
			weekday: 'wednesday',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 37,
			color: 'green'
		},
		{
			id: '04',
			weekday: 'thursday',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 37,
			color: 'green'
		},
		{
			id: '05',
			weekday: 'friday',
			startHours: 10,
			startMinutes: 30,
			endHours: 4,
			endMinutes: 30,
			color: 'var(--second-background)'
		},
		{
			id: '06',
			weekday: 'saturday',
			startHours: 4,
			startMinutes: 2,
			endHours: 14,
			endMinutes: 50,
			color: 'var(--second-background)'
		},
		{
			id: '07',
			weekday: 'sunday',
			startHours: 15,
			startMinutes: 2,
			endHours: 15,
			endMinutes: 51,
			color: 'var(--second-background)'
		}
	];
	// console.log(minOn);
	const handleColor = () => {
		// console.log(objetColor[0].color);
		let color = '';

		let hours = new Date().getHours();
		let minute = new Date().getMinutes();
		let day = new DateObject().weekDay.name; //string
		day = day.toLowerCase();
		let idColor = '06';
		//dia actual
		let dayT = 'friday';
		// 10:30 a 21:30

		let colorChoose = objetColor.filter((item) => item.id === idColor);
		let weekday = colorChoose[0].weekday;
		let startHours = colorChoose[0].startHours;
		let startMinutes = colorChoose[0].startMinutes;
		let endHours = colorChoose[0].endHours;
		let endMinutes = colorChoose[0].endMinutes;
		//16 30 a 4 30
		//16 45
		if (dayT === weekday) {
			if (hours === startHours && minute > startMinutes) {
				setMinOn(true);
			}
			if ((startHours <= hours || hours <= endHours) && minOn === true) {
				color = colorChoose[0].color;

				if (hours === endHours && minute >= endMinutes) {
					setMinOn(false);
				}
			}
		}
		return color;
	};
	return (
		<Fragment>
			<Main />
			<div
				className={validateHours() + ' '}
				style={{ background: handleColor() }}
			>
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
					<Route path="/register-time">
						<RegisterTime
							listColorTeme={listColorTeme}
							setListColorTeme={setListColorTeme}
						/>
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
