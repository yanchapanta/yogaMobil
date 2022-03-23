import React from 'react';
import './Input.scss';
const Input = ({attribute,onChange}) => {
    console.log(onChange);
	return (
		<input
			onChange={(e) => onChange(e.target.value)}
			type={attribute.type}
			className={attribute.className}
			id={attribute.id}
			aria-describedby={attribute.ariadescribedby}

		/>
	);
};

export default Input;
