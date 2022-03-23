export default function SearchResultItems({ email, name }) {
	return (
		<div
			style={{
				backgroundColor: '#E8E7E7',
				marginTop: '1rem',
				marginBottom: '1rem',
				padding: 10,
				width: '100%'
			}}
		>
			<p>{name}</p>
			<p>{email}</p>
		</div>
	);
}
