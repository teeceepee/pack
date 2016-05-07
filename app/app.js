var $ = require('jquery');
var _ = require('lodash');

$(document).ready(function () {
  var index = $('.index-container');
  index.html(
    $('<h1>').text('jQuery powered')
  );

  _.times(2, function () {
    index.slideToggle();
  })

  for (let i of [1, 2]) {
    index.fadeToggle();
  }

});

