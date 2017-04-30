// Expose jQuery to global window object.
require("expose-loader?$!jquery");

require('./app');

console.log('entry');
