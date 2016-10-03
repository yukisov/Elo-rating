/*global describe*/
/*global it*/
var expect = require('chai').expect,
    ratingCalculator = require('../src/js/ratingCalculator');

describe('ratingCalculator module', function(){
  'use strict';

  it ('should get right value', function() {

    const RESULT_WIN = 1;
    const RESULT_LOOSE = 0;

    expect(ratingCalculator.calcRating(1500, 1500, RESULT_WIN))
      .to.equal(1506);

    expect(ratingCalculator.calcRating(1331, 1205, RESULT_LOOSE))
      .to.equal(1322.9146857453402);

  });
});
