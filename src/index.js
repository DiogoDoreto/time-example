// UUI dependencies
window.jQuery = window.$ = require('vendor/uui/js/lib/jquery-1.11.1.min.js');
require('vendor/uui/bootstrap/js/bootstrap.js');
require('vendor/uui/js/uui-core.min.js');

import 'vendor/uui/bootstrap/css/bootstrap.css';
import 'vendor/uui/less/uui-all.less';
import 'vendor/uui/fonts/font-awesome/css/font-awesome.css';

// Project dependencies
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
