import '../sass/general.scss';
import '../sass/utilities.scss';
import './Home.scss';
import React, { Fragment, useState } from 'react';
import images from '../../assets/img/image';
import Menu from './complement/Menu/Menu';
import { Link } from 'react-router-dom';

function Home() {
	//simulacion de boton
	const [modelogin, setModelogin] = useState(false);
	const [clicklogin, setClicklogin] = useState(false);
	const [clicksignup, setClicksignup] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	// setClicklogin(true)
	console.log('mostrar:',modelogin);
	
	
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
			setClicklogin(false)
		
			setClicksignup(false)
			
		} else {
			setError('* email o password no son correctos!');
		}
	};

	return (
		<Fragment>
			
			{(!clicklogin === true) ? (
				<div>
					<Menu setClicklogin={setClicklogin} setClicksignup={setClicksignup} clicksignup={clicksignup}/>
					<div className="header-image container-1">
						<div className="header-image-container">
							<div className="row">
								<div className="col-8">
									<h2 className="title-1-text">Hi Jenny Wilson!</h2>
									<h2 className="title-1-light-text">Good Morning</h2>
								</div>
								
							</div>
							<div className="row-icon mt-3">
								<img
									className="size-icon hover"
									src={images.iconPlayCircle}
									alt="play"
								/>
								<p className="play-text">Continues</p>
							</div>

							<div className="fondo-image">
								<img src={images.MeditationImage} alt="fondoImagen" />
							</div>
						</div>
					</div>
					<div className="container-1">
						{/* titulo */}
						<div className="col d-flex justify-content-between container-1">
							<p className="row-text pt-1 pb-1">Popular</p>
							<p className="row-text pt-1 pb-1">See All</p>
						</div>
						{/* targetas popular*/}
						<div className="row cards container-1">
							<div
								className="card"
								style={{ '--imgCard': 'url("' + images.sleeping + '")' }}
							>
								<h2 className="card-title-text text-white">Sleeping time</h2>
								<span className="card-min-text text-white">15 mint</span>
							</div>
							<div
								className="card"
								style={{ '--imgCard': 'url("' + images.yoga2 + '")' }}
							>
								<h2 className="card-title-text text-black">Yoga</h2>
								<span className="card-min-text text-black">20 mint</span>
							</div>
						</div>
						{/* titulo */}
						<div className="col d-flex justify-content-between container-1">
							<p className="row-text pt-1 pb-1">People’s likes</p>
							<p className="row-text pt-1 pb-1">See All</p>
						</div>
						{/* targetas people likes */}
						<div className="row cards container-1">
							<div className="card gb-blue">
								<h2 className="card-title-text text-black">Motivation</h2>
							</div>
							<div
								className="card gb-pinking"
								style={{ 'background-imagen': 'var(--linear-gradient-rosa)' }}
							>
								<h2 className="card-title-text text-white">Relax</h2>
							</div>
						</div>
					</div>
				</div>
			) : (
				//{/* // formulario login */}
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
			)}
		</Fragment>
	);
}

export default Home;
