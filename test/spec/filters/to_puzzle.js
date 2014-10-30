'use strict';

describe('Filter: toPuzzle', function () {

  // load the filter's module
  beforeEach(module('blloonSearchApp'));

  // initialize a new instance of the filter before each test
  var toPuzzle;
  beforeEach(inject(function ($filter) {
    toPuzzle = $filter('toPuzzle');
  }));

  it('should return the input prefixed with "toPuzzle filter:"', function () {
    var text = 'angularjs';
    expect(toPuzzle(text)).toBe('toPuzzle filter: ' + text);
  });

});
