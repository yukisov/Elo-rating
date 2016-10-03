let $ = require('jquery');
let ratingCalculator = require('./ratingCalculator');
//require('./foo');


$(function() {
  'use strict';

  $('#btnSubmit').on('click', function() {
  
    let newRating = ratingCalculator.calcRating(
      $('#ratingYoursBefore').val(),
      $('#ratingOther1Before').val(),
      $('[name=result]:checked').val()
    );
    
    let output = Math.round(newRating)
      + " (" + newRating + ")";
    $('#ratingYoursAfter').text(output);

  });

});

