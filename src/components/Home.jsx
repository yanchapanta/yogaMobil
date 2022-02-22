import React, { Fragment, Component } from 'react';
import images from '../assets/img/image';

class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className="home container-1">
					<div className="yoga-info">
						<h1 className="title-text">Yoga</h1>
						<div className="yoga-image">
							<img src={images.yoga} alt="yogaimage" />
						</div>

						<p className="pagraph-yoga-text">Start with Fresh Morning!</p>
					</div>
					<button className="btn-signin hover">
						<span>Sign In</span>
						<img src={images.arrowRight} alt="signin" />
					</button>
				</div>
			</Fragment>
		);
	}
}

export default Home;
