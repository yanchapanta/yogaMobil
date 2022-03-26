import { useState, useEffect } from 'react';
import './styles.scss';
import unId from 'uniqid';
const useStateLocalStorage = (localStorageKkey) => {
	const [value, setValue] = useState(
		localStorage.getItem(localStorageKkey) || ''
	);
	useEffect(() => {
		localStorage.setItem(localStorageKkey, value);
	}, [value]);
	return [value, setValue];
};

export default function RegisterTime({ id, setId }) {
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [startHours, setstartHours] = useState('');
	const [startMinutes, setstartMinutes] = useState('');
	const [endHours, setendHours] = useState('');
	const [endMinutes, setendMinutes] = useState('');
	const [weekday, setWeekday] = useState('');
	const [color, setColor] = useState('');
	const [listColorTeme, setListColorTeme] = useStateLocalStorage(
		'myValueListColorTeme'
	);
	// console.log(JSON.parse(localStorage.getItem('dbColorTheme')) || '');

	const [modeEdition, setModeEdition] = useState(false);
	const [error, setError] = useState(false);

	//mostrar edicion
	const showEdit = (item) => {
		setModeEdition(true);

		setStart(`${item.startHours}:${item.startMinutes}`);
		setEnd(`${item.endHours}:${item.endMinutes}`);
		setstartHours(item.startHours);
		setstartMinutes(item.startMinutes);
		setendHours(item.endHours);
		setendMinutes(item.endMinutes);
		setWeekday(item.weekday);
		setColor(item.color);
		setId(item.id);
	};
	//editar tema
	const handleEdit = (e) => {
		e.preventDefault();
		const newArry = listColorTeme.map((item) =>
			item.id === id
				? {
						id: id,
						startHours,
						startMinutes,
						endHours,
						endMinutes,
						color,
						weekday
				  }
				: item
		);
		setListColorTeme(newArry);
		setModeEdition(false);
		//borrar campo
		setStart('');
		setEnd('');
		setstartHours('');
		setstartMinutes('');
		setendHours('');
		setendMinutes('');
		setWeekday('');
		setColor('');
		setId('');
	};

	const addTeme = (eve) => {
		eve.preventDefault();
		if (!color.trim('')) {
			setError('Este campo esta vacio o valores invalidos');
			return;
		}
		if (!weekday.trim('')) {
			setError('Este campo esta vacio o valores invalidos');
			return;
		}
		if (!start.trim('')) {
			setError('Este campo esta vacio o valores invalidos');
			return;
		}
		if (!end.trim('')) {
			setError('Este campo esta vacio o valores invalidos');
			return;
		}
		const newColorTeme = {
			id: unId(),
			startHours,
			startMinutes,
			endHours,
			endMinutes,
			color,
			weekday
		};
		// const [valueStart, setValueStart] = useStateLocalStorage('myValueStart');
		// const onChangeStart = (eve) => {
		// 	setValueStart(eve.target.value);
		// };
		// const [listColorTeme, setListColorTeme] = useState([]);
		let newList = [...listColorTeme, newColorTeme];
		newList = JSON.stringify(newList);
		setListColorTeme(newList);

		// //borrar campo
		// setStart('');
		// setEnd('');
		// setstartHours('');
		// setstartMinutes('');
		// setendHours('');
		// setendMinutes('');
		// setWeekday('');
		// setColor('');
		// setId('');
	};
	const handleDelete = (idTheme) => {
		const newArray = listColorTeme.filter((item) => item.id !== idTheme);
		setListColorTeme(newArray);
	};
	const [valueWeekday, setValueWeekday] =
		useStateLocalStorage('myValueWeekday');
	const onChangeWeekday = (eve) => {
		setValueWeekday(eve.target.value);
	};
	const [valueStart, setValueStart] = useStateLocalStorage('myValueStart');
	const onChangeStart = (eve) => {
		setValueStart(eve.target.value);
	};

	const [valueStartHours, setValueStartHours] =
		useStateLocalStorage('myValueStartHours');
	const onChangeStartHours = (value) => {
		setValueStartHours(value);
	};
	const [valueStartMinutes, setValueStartMinutes] = useStateLocalStorage(
		'myValueStartMinutes'
	);
	const onChangeStartMinutes = (value) => {
		setValueStartMinutes(value);
	};
	const [valueEndHours, setValueEndHours] =
		useStateLocalStorage('myValueEndHours');
	const onChangeEndHours = (value) => {
		setValueEndHours(value);
	};
	const [valueEndMinutes, setValueEndMinutes] =
		useStateLocalStorage('myValueEndMinutes');
	const onChangeEndMinutes = (value) => {
		setValueEndMinutes(value);
	};
	const [valueEnd, setValueEnd] = useStateLocalStorage('myValueEnd');
	const onChangeEnd = (eve) => {
		setValueEnd(eve.target.value);
	};
	console.log('values', valueEnd);
	const [valueColor, setValueColor] = useStateLocalStorage('myValueColor');
	const onChangeColor = (eve) => {
		setValueColor(eve.target.value);
	};
	console.log('values', valueColor);
	return (
		<div className="row">
			{/* registro de ingreso */}
			<div className="col-4">
				<h2>Register color theme</h2>
				<form
					onSubmit={
						modeEdition ? (eve) => handleEdit(eve) : (eve) => addTeme(eve)
					}
					className="time"
				>
					{error ? (
						<div className="time-container alert alert-danger">{error}</div>
					) : (
						<div></div>
					)}
					<div className="time-container">
						<label className="time-row">
							Weekday:
							<select
								name="weekday"
								onChange={(eve) => {
									setWeekday(eve.target.value);
									onChangeWeekday(eve);
								}}
							>
								<option value="none" selected disabled hidden>
									--weekday--
								</option>
								<option
									value="monday"
									selected={weekday == 'monday' ? true : false}
								>
									Monday
								</option>
								<option
									value="tuesday"
									selected={weekday == 'tuesday' ? true : false}
								>
									Tuesday
								</option>
								<option
									value="wednesday"
									selected={weekday == 'wednesday' ? true : false}
								>
									Wednesday
								</option>
								<option
									value="Thursday"
									selected={weekday == 'Thursday' ? true : false}
								>
									Thursday
								</option>
								<option
									value="friday"
									selected={weekday == 'friday' ? true : false}
								>
									Friday
								</option>
								<option
									value="saturday"
									selected={weekday == 'saturday' ? true : false}
								>
									Saturday
								</option>
								<option
									value="sunday"
									selected={weekday == 'sunday' ? true : false}
								>
									Sunday
								</option>
							</select>
						</label>
						<label className="time-row">
							Start:
							<input
								onChange={(val) => {
									setstartHours(val.target.value.split(':')[0]);
									setstartMinutes(val.target.value.split(':')[1]);
									setStart(val.target.value);
									onChangeStartHours(val.target.value.split(':')[0]);
									onChangeStartMinutes(val.target.value.split(':')[1]);
									onChangeStart(val);
								}}
								type="time"
								step="600"
								value={start}
							/>
						</label>
						<label className="time-row">
							End:
							<input
								onChange={(val) => {
									setendHours(val.target.value.split(':')[0]);
									setendMinutes(val.target.value.split(':')[1]);
									onChangeEndHours(val.target.value.split(':')[0]);
									onChangeEndMinutes(val.target.value.split(':')[1]);
									onChangeEnd(val);
									setEnd(val.target.value);
								}}
								type="time"
								step="600"
								value={end}
							/>
						</label>
						<label className="time-row">
							Color:
							<input
								onChange={(val) => {
									setColor(val.target.value);
									onChangeColor(val);
								}}
								type="color"
								name="head"
								value={color}
							/>
						</label>

						<input
							className=" btn btn-primary time-row"
							type="submit"
							value={modeEdition ? 'Edit theme' : 'Add theme'}
						/>
					</div>
				</form>
			</div>
			{/* listado de temas */}
			<div className="col-8">
				<h2>List color theme</h2>
				<ul className="list-group">
					{listColorTeme.length ? (
						listColorTeme.map((item) => (
							<li key={item.id} className="list-item">
								<div>
									<strong>Day:</strong>
									{item.weekday}
								</div>
								<div>
									<strong>Start:</strong>
									{item.startHours}:{item.startMinutes}
								</div>
								<div>
									<strong>End:</strong>
									{item.endHours}:{item.endMinutes}
								</div>
								<div>
									<strong>Color:</strong>
									{item.color}
								</div>
								<div>
									<button
										onClick={() => handleDelete(item.id)}
										className="btn btn-danger mr-1"
									>
										Delete
									</button>
									<button
										onClick={() => showEdit(item)}
										className="btn btn-warning"
									>
										Edit
									</button>
								</div>
							</li>
						))
					) : (
						<h3>No existen datos</h3>
					)}
				</ul>
			</div>
		</div>
	);
}
