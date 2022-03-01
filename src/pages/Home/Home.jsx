import '../sass/general.scss';
import '../sass/utilities.scss';
import './Home.scss';
import React, { Fragment } from 'react';
import images from '../../assets/img/image';
import Menu from './complement/Menu';

function Home() {
	return (
		<Fragment>
			<Menu/>

			<div className="header-image container-1">
				<div className="header-image-container">
					<div className="row">
						<div className="col-8">
							<h2 className="title-1-text">Hi Jenny Wilson!</h2>
							<h2 className="title-1-light-text">Good Morning</h2>
						</div>
						<div
							className="col-4 justify-content-end d-flex"
							style={{ gap: '1rem' }}
						>
							<img
								className="icon-circle hover"
								src={images.iconSun}
								alt="sun"
							/>

							<div>
								<img
									className="icon-circle hover"
									src={images.User1}
									alt="user"
								/>
							</div>
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
					<div className="card" style={{'--imgCard':'url("'+images.sleeping+'")'}}>
						<h2 className="card-title-text text-white">Sleeping time</h2>
						<span className="card-min-text text-white">15 mint</span>
					</div>
					<div className="card" style={{'--imgCard':'url("'+images.yoga2+'")'}}>
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
					<div className="card gb-pinking" style={{'background-imagen':'var(--linear-gradient-rosa)'}}>
						<h2 className="card-title-text text-white">Relax</h2>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Home;
