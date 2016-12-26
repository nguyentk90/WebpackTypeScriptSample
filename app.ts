//commonjs style
//import greeter = require('./greeter');

//ES6 style
import { greetex } from './greeter';

import $ = require('jquery');

$(() => {
    $(document.body).html(greetex('Webpack!'));
});