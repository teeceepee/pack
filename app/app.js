var $ = require('jquery');

$(document).ready(function () {
  var index = $('.index-container');
  index.html(
    $('<h1>').text('jQuery powered')
  );

  for (let i of [1, 2]) {
    index.fadeToggle();
  }

});

