import React, { Fragment, Component } from 'react';
import images from '../assets/img/image';

class home1 extends Component {
	render() {
		return (
			<Fragment>
				<h1 className="text-title">Yoga</h1>
				<div className="yoga-image">
					<img src={images.img2} alt="yoga image" />
				</div>

				<p className='text-pagraph-yoga'>Start with Fresh Morning!</p>
				<button className="btn-signin">
					Sign In  <img src={images.img1} alt="sign in" />
				</button>
			</Fragment>
		);
	}
}

export default home1;
