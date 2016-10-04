/*global describe*/
/*global it*/
import 'babel-polyfill'

import { expect } from 'chai';
import * as ratingCalculator from '../src/js/ratingCalculator';

describe('ratingCalculator module', function(){

  it ('should get right value', function() {

    const RESULT_WIN = 1;
    const RESULT_LOOSE = 0;

    expect(ratingCalculator.calcRating(1500, 1500, RESULT_WIN))
      .to.equal(1506);

    expect(ratingCalculator.calcRating(1331, 1205, RESULT_LOOSE))
      .to.equal(1322.9146857453402);

  });
});
