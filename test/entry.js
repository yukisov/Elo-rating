/*global describe*/
/*global it*/
var expect = require('chai').expect,
    foo = require('../src/js/foo');

describe('foo module', function(){
  'use strict';
  it ('should get right value', function() {
    expect(foo.hello()).to.equal('Hello!');
  });
});
