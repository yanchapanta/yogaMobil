import { React, Fragment, useState } from 'react';

function Temperatura() {
	const [temperatura, setTemperatura] = useState(0);
	const subir = () => {
		setTemperatura(temperatura + 1);
	};
	const bajar = () => {
		setTemperatura(temperatura - 1);
	};
	return (
		<Fragment>
			Temperatura :<strong>{temperatura}</strong> <br />
			<p>{temperatura > 5 ? 'hacer frio' : 'hace calor'}</p>
			<button onClick={subir}>subir temperatura</button>
			<button onClick={bajar}>bajar temperatura</button>
			<br />
		</Fragment>
	);
}

export default Temperatura;
