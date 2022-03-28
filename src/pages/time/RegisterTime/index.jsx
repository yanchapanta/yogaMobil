import { useState, useEffect } from 'react';
import './styles.scss';
import unId from 'uniqid';
const useStateWithLocalStorage = (localStorageKey) => {
	const [value, setValue] = useState(
		localStorage.getItem(localStorageKey) || ''
	);

	useEffect(() => {
		localStorage.setItem(localStorageKey, value);
	}, [value]);

	return [JSON.parse(value), setValue];
};
export default function RegisterTime({ listColorTeme, setListColorTeme }) {
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [startHours, setstartHours] = useState('');
	const [startMinutes, setstartMinutes] = useState('');
	const [endHours, setendHours] = useState('');
	const [endMinutes, setendMinutes] = useState('');
	const [weekday, setWeekday] = useState('');
	const [color, setColor] = useState('');
	const [listColorTemeStorage, setListColorTemeStorage] =
		useStateWithLocalStorage('listColorTemeStorage');
	const [modeEdition, setModeEdition] = useState(false);
	const [id, setId] = useState('');
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
		const newArry = listColorTemeStorage.map((item) =>
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

		setListColorTemeStorage(JSON.stringify(newArry));
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

		// setListColorTeme([...listColorTemeStorage, newColorTeme]);
		let dateStorage = [...listColorTemeStorage, newColorTeme];
		dateStorage = JSON.stringify(dateStorage);
		setListColorTemeStorage(dateStorage);
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
	const handleDelete = (idTheme) => {
		const newArray = listColorTemeStorage.filter((item) => item.id !== idTheme);
		setListColorTemeStorage(JSON.stringify(newArray));
	};

	return (
		<div className="row">
			{/* registro de ingreso */}
			<div className="col-lg-4 ">
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
								onChange={(eve) => setWeekday(eve.target.value)}
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
								onChange={(val) => setColor(val.target.value)}
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
			<div className="col-lg-8">
				<h2>List color theme</h2>
				<ul className="list-group">
					{listColorTemeStorage.length ? (
						listColorTemeStorage.map((item) => (
							<li key={item.id} className="list-item">
								<div className='col d-sm-flex d-lg-flex flex-column flex-lg-row'>
									<strong>Day:</strong>
									{item.weekday}
								</div>
								<div className='col d-sm-flex d-lg-flex flex-column flex-lg-row'>
									<strong>Start:</strong>
									{item.startHours}:{item.startMinutes}
								</div>
								<div className='col d-sm-flex d-lg-flex flex-column flex-lg-row'>
									<strong>End:</strong>
									{item.endHours}:{item.endMinutes}
								</div>
								<div className='col d-sm-flex d-lg-flex flex-column flex-lg-row'>
									<strong>Color:</strong>
									<input type="color" value={item.color} disabled />
								</div>
								<div className='col d-sm-flex d-lg-flex flex-column flex-lg-row'>
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
