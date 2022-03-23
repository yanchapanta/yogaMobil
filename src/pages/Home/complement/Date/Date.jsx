import React, { useState, Fragment } from 'react';
import { DatePicker, TimePicker, DateTimePicker } from '@material-ui/pickers';

// console.log(new Date())
const Date = () => {
	const [fechaSeleccionada, cambiarFechaSelecionada] = useState(new Date());

	// console.log(fechaSeleccionada)

	return (
		<Fragment>
			<div className="contenedor">
				<div className="grupo">
					<label>Fecha</label>
					<DatePicker
						value={fechaSeleccionada}
						onChange={cambiarFechaSelecionada}
					/>
				</div>

				<div className="grupo">
					<label>Hora</label>
					<TimePicker
						value={fechaSeleccionada}
						onChange={cambiarFechaSelecionada}
					/>
				</div>

				<div className="grupo">
					<label>Fecha y Hora</label>
					<DateTimePicker
						value={fechaSeleccionada}
						onChange={cambiarFechaSelecionada}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Date;
