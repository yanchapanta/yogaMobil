import React, { Fragment, useState } from 'react';
import Title from '../Login/component/Title/Title';
import Label from '../Login/component/Label/Label';
import Input from '../Login/component/Input/Input';
import LinkUrl from '../Login/component/LinkUrl/LinkUrl'
const Register = () => {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const validateForm = () => {};
	return (
		<Fragment>
			
			<div className="row d-flex justify-content-center mt-5">
				<div className="col col-md-5 ">
					<Title text="Register user" />
					
					<form
						onSubmit={(e) => {
							validateForm(e);
						}}
						className="p-3"
					>
						<div className="mb-3 ">
							<Label
								text="Name"
								for="exampleInputEmail1"
								className="form-label"
							/>
							<Input
								attribute={{
									type: 'text',
									className: 'form-control form-input',
									id: 'exampleInputEmail1',
									ariadescribedby: 'emailHelp'
								}}
								onChange={setEmail}
							/>
						</div>
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
						<div className="mb-3 ">
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
								onChange={setEmail}
							/>
						</div>

						<input
							className=" btn btn-outline-primary btn-block d-block form-Submit"
							type="submit"
							style={{ width: '100%' }}
							value="Register"
						/>

						<LinkUrl
							attribute={{
								text: 'Back to log in',
								to: '/',
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
};

export default Register;
