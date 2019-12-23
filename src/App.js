import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
// import nomalize.css will make the css look the same in every browser(Chrome, Firefox, IE)

ReactDOM.render(<AppRouter />, document.getElementById('app'));