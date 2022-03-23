import './SendEmail.scss';
import React, { Fragment, useState } from 'react';
import Title from '../Login/component/Title/Title';

import LinkUrl from '../Login/component/LinkUrl/LinkUrl';
import images from '../../assets/img/image';
const SendEmail = ({setClicklogin}) => {
	const [email, setEmail] = useState('');
	const validateForm = (e) => {
		e.preventDefault();
    setClicklogin(true)
    // window.location.href='/'
	};
	return (
		<Fragment>
			<div className="row d-flex justify-content-center mt-5">
				<div className="col col-md-5 ">
					<Title text="Email has been sent!" />
					<p>
						Please check your inbox for instructions on how to reset the
						password
					</p>
					<form
						onSubmit={(e) => {
							validateForm(e);
						}}
						className="p-3"
					>
						<div className="mb-3 ">
							<div className="img-circle  ">
								<img src={images.iconEmail} alt="" />
							</div>
						</div>

            <LinkUrl
              attribute={{
                text: 'Login',
                to: '/',
                type: 'button',
                class: ' btn btn-outline-primary btn-block d-block form-Submit '
              }}
            />
					
						<span className="mr-1">Didn’t receive the email?</span>
						<LinkUrl
							attribute={{
								text: 'Resend',
								to: '/password-recovery',
								type: 'button',
								class: ' btn-link btn-linkss '
							}}
						/>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default SendEmail;
