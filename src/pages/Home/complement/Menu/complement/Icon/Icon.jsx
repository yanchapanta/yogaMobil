import React from 'react';
import './Icon.scss';
const Icon = (props) => {
	return (
		<img
			onClick={(e) => props.setClicklogin(true)}
			style={{ display: props.display }}
			className={props.class}
			src={props.src}
			alt="notification"
		/>
	);
};

export default Icon;
