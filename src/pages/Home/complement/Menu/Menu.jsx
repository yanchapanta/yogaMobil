import React from 'react';
import './Menu.scss';
import images from '../../../../assets/img/image';
import Icon from './complement/Icon/Icon';
import { Link } from 'react-router-dom';

const Menu = ({ setClicklogin, setClicksignup, clicksignup }) => {
	return (
		<nav className="menu-phone container-1">
			<div className="menu-phone-content ">
		
				<Icon
					display="var(--hidden-desktop)"
					src={images.menuHome}
					alt="Home"
					onClick={setClicklogin}
				/>
				
				<Icon
					display="var(--hidden-desktop)"
					src={images.menuNotification}
					alt="Notification"
				/>
				<Icon
					display="var(--hidden-desktop)"
					src={images.menuPlayBold}
					alt="Play"
				/>
				<div className="menu-desktop">
					<div className="menu-desktop-row">
						<label className="yoga-menu-text d-none d-md-flex ">Yoga</label>
						<a className="btn-linkss hover d-none d-md-flex" href="#">
							Discovery{' '}
						</a>
						<a className="btn-linkss hover d-none d-md-flex" href="#">
							Jobs{' '}
						</a>
					</div>
					<div className=" menu-desktop-row btn-search">
						<label htmlFor="search">
							<Icon
								class="menu-phone-img hover"
								display=""
								src={images.menuSearch}
								alt="search"
							/>
						</label>
						<input
							id="search"
							className="mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</div>
					{!clicksignup ? (
						//boton de ingresar y de registro
						<div className="menu-desktop-row ">
							<button
								onClick={(e) => setClicklogin(true)}
								className="btn-signin2  hover d-none d-md-flex "
							>
								Log in{' '}
							</button>
							<Link
								to="/register"
								className="btn-signup  hover d-none d-md-flex "
							>
								Sign up
							</Link>
						</div>
					) : (
						// boton tema usuario y boton usuario perfil y boton sign out
						<div
							className="col-4 justify-content-end d-flex d-none d-lg-flex"
							style={{ gap: '1rem' }}
						>
							<Link to="/register-time">
								<img
									className="icon-circle hover"
									src={images.iconSun}
									alt="sun"
								/>
							</Link>

							<div className="primary-nav hover">
								<img className="icon-circle" src={images.User1} alt="user" />
								<nav className="primary-nav-user">
									<div className="primary-nav-caja">
										<span onClick={(e) => setClicksignup(false)}>Sign out</span>
									</div>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Menu;
