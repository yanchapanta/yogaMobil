import React, { Fragment } from 'react';
import './Interfaz.scss';
import './sass/general.scss';
import './sass/utilities.scss';
// C:\Users\YANCHAPANTA\Desktop\react\yoga-mobil\src\pages\Interfaz.scss
import { Link } from 'react-router-dom';
import images from '../assets/img/image';
import Title from './components/Title/Title';

function Interfaz() {
	// const [modelogin, setModelogin] = useState(true);
	return (
		<Fragment>
			<div>
				<div className="home container-1">
					<div className="yoga-info">
						<Title text='Yoga'/>
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

export default Interfaz;
