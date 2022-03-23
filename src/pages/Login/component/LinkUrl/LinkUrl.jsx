import React from 'react';
import { Link } from 'react-router-dom';
import './LinkUrl.scss';

const LinkUrl = ({ attribute }) => {


	return (
		<Link
        to={attribute.to}
        type={attribute.type}
        className={attribute.class}
     
		>
			{attribute.text}
		</Link>
	);
};

export default LinkUrl;
