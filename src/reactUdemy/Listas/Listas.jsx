import React, { useEffect, useState } from 'react';

const Listas = () => {
	const jsonData = [
		{ key: '01', name: 'Marco' },
		{ key: '02', name: 'Vinicio' },
		{ key: '03', name: 'Rodolfo' }
	];
	const [isloading, setIsloading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsloading(false);
		}, 4000);
	}, []);
	const renderData = () => {
		return jsonData?.map((value, index) => (
			<div key={value.key}>
				<p>{value.name}</p>
			</div>
		));
	};
	return <div>{isloading ? <h2> Is loading...</h2> : renderData()}</div>;
};

export default Listas;
