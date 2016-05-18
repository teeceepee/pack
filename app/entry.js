// Expose jQuery to global window object.
require("expose?$!jquery");

require('./app');
require('./vue_app');

console.log('entry');
