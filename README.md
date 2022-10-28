# PROYECTO YOGA MOBIL EN REACHT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project have design figma en el siguiente enlace
```js
https://www.figma.com/file/O8DANPeLhWYCEQD0fn2mEn/Yoga-MobileAppCommunityCopy)?node-id=106%3A13
```


## Mi imagen principal desktop

![miimagen](https://raw.githubusercontent.com/yanchapanta/yogaMobil/react-class-2022/src/assets/imgApp/homeLogin.png)

![img]()

## Mi imagen principal phone

![vistaphone](https://raw.githubusercontent.com/yanchapanta/yogaMobil/react-class-2022/src/assets/imgApp/homeLogin.png)

![img2]()
En el home principal, el usuario aun no esta logeado



### EL siguiente código, es utilizado para los link

```jsx
import { BrowserRouter as Routes, Route } from 'react-router-dom';
<Routes>
	<Route exact path="/">
		<Home
			modelogin={modelogin}
			clicklogin={clicklogin}
			clicksignup={clicksignup}
			email={email}
			password={password}
			error={error}
			setModelogin={setModelogin}
			setClicklogin={setClicklogin}
			setClicksignup={setClicksignup}
			setEmail={setEmail}
			setPassword={setPassword}
			setError={setError}
			validateForm={validateForm}
		/>
	</Route>
	<Route path="/login/:validate">
		<Login
			modelogin={modelogin}
			clicklogin={clicklogin}
			clicksignup={clicksignup}
			email={email}
			password={password}
			error={error}
			setModelogin={setModelogin}
			setClicklogin={setClicklogin}
			setClicksignup={setClicksignup}
			setEmail={setEmail}
			setPassword={setPassword}
			setError={setError}
			validateForm={validateForm}
		/>
	</Route>
	<Route path="/password-recovery">
		<PasswordRecovery setClicklogin={setClicklogin} />
	</Route>
	<Route path="/register-time">
		<RegisterTime
			listColorTeme={listColorTeme}
			setListColorTeme={setListColorTeme}
		/>
	</Route>
</Routes>;
```

### Desde otra página se manda el link

```HTML
<Link
to={attribute.to}
type={attribute.type}
className={attribute.class}

>
    {attribute.text}
</Link>
```

### Los colore cambiaran automaticamente dependiendo de la hora

La validación para hora esta bien, pero la de minutos no da.

```jsx
const validateHours = () => {
	let hours = new Date().getHours();
	let minute = new Date().getMinutes();

	//colores
	let colors = '';
	if ((hours >= 16 && minute >= 30) || (hours <= 4 && minute <= 30)) {
		colors = 'bg-main';
	}
	return colors;
};
```
la siguiente validacion aparentemente esta bien pero me lanza una pantalla en blanco y no se cual es el error, lo unico que dice es que es por que mucho se renderiza.
```js
const handleColor = () => {
		// console.log(objetColor[0].color);
		let color = '';

		let hours = new Date().getHours();
		let minute = new Date().getMinutes();
		let day = new DateObject().weekDay.name; //string
		day = day.toLowerCase();
		let idColor = '06';
		//dia actual
		let dayT = 'friday';
		// 10:30 a 21:30

		let colorChoose = objetColor.filter((item) => item.id === idColor);
		let weekday = colorChoose[0].weekday;
		let startHours = colorChoose[0].startHours;
		let startMinutes = colorChoose[0].startMinutes;
		let endHours = colorChoose[0].endHours;
		let endMinutes = colorChoose[0].endMinutes;
		//16 30 a 4 30
		//16 45
		if (dayT === weekday) {
			if (hours === startHours && minute > startMinutes) {
				setMinOn(true);
			}
			if ((startHours <= hours || hours <= endHours) && minOn === true) {
				color = colorChoose[0].color;

				if (hours === endHours && minute >= endMinutes) {
					setMinOn(false);
				}
			}
		}
		return color;
	};

```

### Enviando la direccion de img a mi css

### Archivo en donde se encuentra mis images

```jsx
import yoga from './yoga-image.svg';
import yoga2 from './yoga-2.svg';
import arrowRight from './icon/arrow-right.svg';
import User1 from './user/woman.svg';
import MeditationImage from './icon/meditationImage.svg';
import iconEmail from './icon/email.svg';
import iconPlayCircle from './icon/play-circle.svg';
import iconPlayCircleWhite from './icon/play-circle-white.svg';
import iconSun from './icon/sun.svg';
import iconMediation from './icon/iconMeditation.svg';
import iconArrow from './icon/arrow-left-circle.svg';
import sleeping from './target/sleepping.svg';
import rainbow from './target/rainbow.svg';
import face from './target/face.svg';
import phone from './target/phone.svg';
import battle from './target/battle.svg';
import ungaro from './target/ungaro.svg';
// icono menu phone
import menuHome from './menu/home.svg';
import menuNotification from './menu/Notification.svg';
import menuPlayBold from './menu/playBold.svg';
import menuSearch from './menu/search.svg';

const images = {
	iconEmail: iconEmail,
	menuHome: menuHome,
	menuNotification: menuNotification,
	menuPlayBold: menuPlayBold,
	menuSearch: menuSearch,
	rainbow: rainbow,
	face: face,
	phone: phone,
	battle: battle,
	iconMediation: iconMediation,
	iconArrow: iconArrow,
	iconSun: iconSun,
	iconPlayCircleWhite: iconPlayCircleWhite,
	iconPlayCircle: iconPlayCircle,
	MeditationImage: MeditationImage,
	yoga: yoga,
	yoga2: yoga2,
	User1: User1,
	arrowRight: arrowRight,
	ungaro: ungaro,
	sleeping: sleeping
};

export default images;
```

### Las images llamo desde el archivo react

```HTML
import images from '../../assets/img/image';
<input
	className=" btn btn-outline-primary btn-block d-block form-Submit"
	style={{ width: '100%' }}
/>

<img src={images.MeditationImage} alt="fondoImagen" />
```

### aprendi enviar la url a csss

```HTML
<div
    className="card"
    style={{ '--imgCard': 'url("' + images.sleeping + '")' }}
>
    <h2 className="card-title-text text-white">Sleeping time</h2>
    <span className="card-min-text text-white">15 mint</span>
</div>

```

### Vista de registro colores
LIGHT
![registroColore]()

NIGHT
![registroColoresNight]()

Código entradas
```JSX
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
```

Código  add color
```JSX
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
```

Código  editar
```JSX

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
```

Código   mostrar datos del localstorage
```JSX
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
```

Código   eliminar
```JSX
const handleDelete = (idTheme) => {
		const newArray = listColorTemeStorage.filter((item) => item.id !== idTheme);
		setListColorTemeStorage(JSON.stringify(newArray));
	};
```
MODO PHONE
![registroColoresNight]()
### Los datos se almacenan en el localStorage
![registroColoresNight]()
Código función para guardar en localStorage
```js
const useStateWithLocalStorage = (localStorageKey) => {
	const [value, setValue] = useState(
		localStorage.getItem(localStorageKey) || ''
	);

	useEffect(() => {
		localStorage.setItem(localStorageKey, value);
	}, [value]);

	return [JSON.parse(value), setValue];
};
```
Fin de presentación
![registroColoresNight]()
Vista en dispositivo mobil
![fin]()