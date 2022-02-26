import React, { Fragment } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import './sass/styles.scss';
import Login from './components/Login';
import Home from './components/Home';
import Home2 from './components/Home2';
import PasswordRecovery1 from './components/PasswordRecovery1';

function App() {
	return (
		<Fragment>
			<Routes>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/home">
						<Home2 />
					</Route>
					<Route path="/PasswordRecovery1">
						<PasswordRecovery1 />
					</Route>
				</Switch>
			</Routes>
		</Fragment>
	);
}

export default App;
