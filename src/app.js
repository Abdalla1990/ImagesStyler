import React from 'react';
import ReactDOM from 'react-dom';
import Images from './components/Images'
import 'normalize.css/normalize.css' // this module resets the css browser configurations to the default settings.
import './styles/styles.scss'; // loades the styles file which we configured webpack to read in bwepack config file.


ReactDOM.render(<Images />,document.getElementById('app'));