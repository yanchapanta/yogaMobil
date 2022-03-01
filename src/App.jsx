import React, { Fragment } from 'react';
import  { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

// import Login from './pages/Login/Login';
// import Interfaz from './pages/Interfaz';
// import Login from './pages/Login/Login';


function App() {
		return <Fragment>
			
			<Routes>
				<Route exact path='/'>		
					<Home/>
				</Route>
				<Route exact path='/login'>		
					{/* <Login/> */}
				</Route>
			</Routes>
		

		</Fragment>
		
	
}

export default App;
