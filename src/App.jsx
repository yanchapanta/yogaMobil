import React, { Fragment } from 'react';
// import Login from './pages/Login/Login';
import Interfaz from './pages/Interfaz';
import Login from './pages/Login/Login';
import  { BrowserRouter as Routes, Route } from 'react-router-dom';


function App() {
		return <Fragment>
			
				<Routes>
					<Route exact path='/'>		
						<Interfaz/>
					</Route>
					<Route exact path='/login'>		
						<Login/>
					</Route>
				</Routes>
		

		</Fragment>
		
	
}

export default App;
