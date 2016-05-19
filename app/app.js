// JavaScript
//var $ = require('jquery');
var _ = require('lodash');

// CSS
require('purecss/build/tables.css');
require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/css/bootstrap.css');

require('./app.css');

$(document).ready(function () {
  var index = $('.index-container');
  index.html(
    $('<h1>').text('jQuery powered')
  );

  _.times(2, function () {
    index.slideToggle();
  });

  for (let i of [1, 2]) {
    index.fadeToggle();
  }

});

