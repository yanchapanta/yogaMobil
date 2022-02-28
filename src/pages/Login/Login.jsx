import React, { Fragment, useState } from 'react';

// import Home2 from './Home2';

import { Link } from 'react-router-dom';


function Login() {
	//simulacion de boton
	const [modelogin, setModelogin] = useState(true);

	//entrada de formulario
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);


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
			setModelogin(false);
		} else {
			setError('* email o password no son correctos!');
		}		
	};

	return (
		<Fragment>
		
					{/* // formulario login */}
					<div className="row d-flex justify-content-center mt-5">
						<div className="col col-md-5 ">
							<form
								onSubmit={(e) => {
									validateForm(e);
								}}
								className="p-3"
							>
								<div className="mb-3 ">
									<label for="exampleInputEmail1" className="form-label">
										Email address
									</label>
									<input
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div className="mb-3">
									<label for="exampleInputPassword1" className="form-label">
										Password
									</label>
									<input
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
									/>
								</div>
								<input
								
									className=" btn btn-outline-primary btn-block d-block"
									type="submit"
									style={{ width: '100%' }}
									value='Log in'
								
								/> 
		
								
								<Link to="/PasswordRecovery1" type="button" class="btn btn-link">
									Olvidé mi contraseña
								</Link>
							</form>
							{error !== null ? (
								<div className="ml-1 badge text-danger">{error}</div>
							) : (
								<div></div>
							)}
						</div>
					</div>

			
			}
		
		</Fragment>
	);
}

export default Login;
