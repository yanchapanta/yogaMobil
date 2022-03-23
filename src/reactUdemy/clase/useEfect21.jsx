import React, { useEffect, useState } from 'react';

const useEfect21 = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	//useEffect no es un asyncrono ====const useEffect =(async () => {
	// componentDidUpdate
	useEffect(() => {
		//esto si se puede hacer
		const functionTwo = async () => {};
		functionTwo().catch(null);
		console.log('componentDidUpdate effect');
	});
	//componentDidMount //solo cuando se renderiza por primera vez
	useEffect(() => {
		//llamada al api o cuando el componente se monte
		console.log('componentDidMount effect');
		//colocar cosas que tengas que removerlos en nuestro albol de componetes
		return () => {
			console.log('WIllUnmount');
		};
	}, []);

	//cambia si cambia cierta dependencia
	// useEffect(() => {
	// 	//llamada al api o cuando el componente se monte
	// 	console.log('name cambio');
	// }, [name]);
	// useEffect(() => {
	// 	//llamada al api o cuando el componente se monte
	// 	console.log('age cambio');
	// }, [age]);
	//LOS DOS A LA VEZ
	useEffect(() => {
		console.log('name o age cambio');
	}, [name, age]);
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={({ target: { value } }) => setName(value)}
			/>
			<br />
			<br />
			<br />
			<input
				type="text"
				value={age}
				onChange={({ target: { value } }) => setAge(value)}
			/>
		</div>
	);
};

export default useEfect21;
