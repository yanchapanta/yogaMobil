import './Login.scss';
import React, { Fragment, useState } from 'react';
import Label from './component/Label/Label';
import Input from './component/Input/Input';
import Title from './component/Title/Title';
import LinkUrl from './component/LinkUrl/LinkUrl';
import { useParams } from 'react-router-dom';

function Login({ error, setEmail, setPassword, validateForm }) {
	const { validate } = useParams();
	console.log(' validate', typeof validate);

	return (
		<Fragment>
			{/* // formulario login */}
			<div className="row d-flex justify-content-center mt-5">
				<div className="col col-md-5 ">
					<Title text="Login" />
					<form
						onSubmit={(e) => {
							validateForm(e);
						}}
						className="p-3"
					>
						<div className="mb-3 ">
							<Label
								text="Email address"
								for="exampleInputEmail1"
								className="form-label"
							/>
							<Input
								attribute={{
									type: 'email',
									className: 'form-control form-input',
									id: 'exampleInputEmail1',
									ariadescribedby: 'emailHelp'
								}}
								onChange={setEmail}
							/>
						</div>
						<div className="mb-3">
							<Label
								text="Password"
								for="exampleInputEmail1"
								className="form-label"
							/>

							<Input
								attribute={{
									type: 'password',
									className: 'form-control form-input',
									id: 'exampleInputEmail1',
									ariadescribedby: 'emailHelp'
								}}
								onChange={setPassword}
							/>
						</div>
						{/* {validate == 'true' ? (
							<LinkUrl
								attribute={{
									text: 'Submit a',
									to: '/',
									type: 'button',
									class:
										' btn btn-outline-primary btn-block d-block form-Submit'
								}}
							/>
						) : (
							<input
								className=" btn btn-outline-primary btn-block d-block form-Submit"
								type="submit"
								style={{ width: '100%' }}
								value="Log in home"
							/>
						)} */}
						<input
							className=" btn btn-outline-primary btn-block d-block form-Submit"
							type="submit"
							style={{ width: '100%' }}
							value="Log in home"
						/>
						<LinkUrl
							attribute={{
								text: 'Olvidé mi contraseña',
								to: '/password-recovery',
								type: 'button',
								class: ' btn-link btn-linkss '
							}}
						/>
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
