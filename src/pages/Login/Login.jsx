import './Login.scss';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Login({error,setEmail,setPassword,validateForm}) {
	
		

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
										className="form-control form-input"
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
										className="form-control form-input"
										id="exampleInputPassword1"
										
									/>
								</div>
								<input
								
									className=" btn btn-outline-primary btn-block d-block form-Submit"
									type="submit"
									style={{ width: '100%' }}
									value='Log in'
								
								/> 
		
								
								<Link to="/password-recovery" type="button" class="btn btn-link btn-linkss ">
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

		
		
		</Fragment>
	);
}

export default Login;
