import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/img/image';
import Login from './Login';

function Home() {
	// const [modelogin, setModelogin] = useState(true);
	return (
		<Fragment>
			<div>
				<div className="home container-1">
					<div className="yoga-info">
						<h1 className="title-text">Yoga</h1>
						<div className="yoga-image">
							<img src={images.yoga} alt="yogaimage" />
						</div>

						<p className="pagraph-yoga-text">Start with Fresh Morning!</p>
					</div>
					<Link to="/login" className="btn-signin hover">
						<span>Sign In</span>
						<img src={images.arrowRight} alt="signin" />
					</Link>
				</div>
			</div>
		</Fragment>
	);
}

export default Home;
