import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid';

function TimeRecords() {
	const [hstart, setHstart] = useState('');
	const [hend, setHend] = useState('');
	const [listtime, setListtime] = useState([]);
	const [errostart, setErrorstart] = useState(null);
	const [erroend, setErrorend] = useState(null);
  const [editmode,setEditmode]=useState(false)
  const [id,setId]=useState('')

	const saveTime = (e) => {
		e.preventDefault();
		const obListTime = {
			id: uniqid(),
			start: hstart,
			end: hend
		};
		if (!hstart.trim('')) {
			setErrorstart('El campo esta vacio');
			return;
		}
		if (!hend.trim('')) {
			setErrorend('El campo esta vacio');
			return;
		}
		setListtime([...listtime, obListTime]);
		setHstart('');
		setHend('');
		setErrorstart(null);
		setErrorend(null);
	};
	const deleteTiem = (id) => {
		const newArray = listtime.filter((item) => item.id !== id);
		setListtime(newArray);
	};
  //editar de lista
	const editTiem = (item) => {
    setHstart(item.start)
    setHend(item.end)
    setEditmode(true)
    setId(item.id)

	};
  //editar de registro
  const editRecord=()=>{
      console.log('registro');
      const newListtime=listtime.map((item)=>item.id === id ? {id:id,start:hstart,end:hend}:item)
      setListtime(newListtime)
      setHstart('');
      setHend('');
      setEditmode(false)

  }
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>registro de horario</h2>
						<form
							onSubmit={editmode?(e) => {
								editRecord(e);
							}:(e) => {
								saveTime(e);
							}}
							className="form-group"
							action="#"
						>
							<label htmlFor="hstart">Hora inicial</label>

							<input
								value={hstart}
								id="hstart"
								onChange={(e) => {
									setHstart(e.target.value);
								}}
								className="form-control mb-3 rounded-1"
								type="time"
								placeholder="Hora inicial"
							/>
							<div>
								{errostart != null ? (
									<p className="badge text-danger text-bold tb">{errostart}</p>
								) : (
									<p></p>
								)}
							</div>
							<label htmlFor="hend">Hora final</label>

							<input
								value={hend}
								id="hend"
								onChange={(e) => {
									setHend(e.target.value);
								}}
								className="form-control mb-3 rounded-1"
								type="time"
								placeholder="Hora final"
							/>
							<div>
								{erroend != null ? (
									<div className="badge text-danger text-bold tb">
										{erroend}
									</div>
								) : (
									<p></p>
								)}
							</div>
              {
                (editmode === false)?(
                  <input
                    className="btn btn-outline-primary"
                    type="submit"
                    value="GUARDAR"
                  />
                  
                  ):(
                  <input

                    className="btn btn-outline-primary"
                    type="submit"
                    value="EDITAR"
                  />

                )
              }
						</form>
					</div>
					<div className="col mt-5">
						<ul>
							{listtime.map((item, index) => (
								<li className="mb-2" key={item.id}>
									{item.start} - {item.end}
									<button
										onClick={() => {
											deleteTiem(item.id);
										}}
										className="btn btn-outline-danger float-right ml-1"
									>
										ELIMINAR
									</button>
									<button
										onClick={() => {
											editTiem(item)
										}}
										className="btn btn-outline-danger float-right ml-1"
									>
										EDITAR
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default TimeRecords;
