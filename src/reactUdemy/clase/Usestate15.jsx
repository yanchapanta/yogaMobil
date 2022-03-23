import React, { useState } from 'react';

const Usestate15 = () => {
	const [name, setName] = useState('');
	const [age] = useState('');
	const [, setSomething] = useState('');

	const handleHeyClick = () => {
		setName('Jose');
	};
	return (
		<div>
			<h2>Hola {name}</h2>
			<p>{age}</p>
			<button onClick={handleHeyClick}> hey</button>
		</div>
	);
};

export default Usestate15;
