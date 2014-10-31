'use strict';

describe('Filter: toPuzzle', function () {

  // load the filter's module
  beforeEach(module('blloonSearchApp'));

  // initialize a new instance of the filter before each test
  var toPuzzle;
  beforeEach(inject(function ($filter) {
    toPuzzle = $filter('toPuzzle');
  }));

  it('should return the input array with subarrays', function () {
    var arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },
      { id: 7 }, { id: 8 }, { id: 9 }];
    expect(toPuzzle(arr)).toEqual([
      [ { id : 1 }, { id : 2 } ],
      [ { id : 3 } ],
      [ { id : 4 }, { id : 5 } ],
      [ { id : 6 }, { id : 7 } ],
      [ { id : 8 }, { id : 9 } ]
    ]);
  });

});
