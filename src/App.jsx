import React, { Fragment } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';

 import Login from './pages/Login/Login';
// import Interfaz from './pages/Interfaz';


function App() {

	//simulacion de boton
	
	return (
		<Fragment>
			<Routes>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/password-recovery">
					<PasswordRecovery />
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
