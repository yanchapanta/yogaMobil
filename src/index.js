import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';

import 'bootstrap/dist/css/bootstrap.css'
import './pages/sass/_values.scss';
import './pages/sass/general.scss';
import './pages/sass/_mixins.scss';
import './pages/sass/utilities.scss';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
			<App />
		</MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


