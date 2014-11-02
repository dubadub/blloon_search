'use strict';

describe('Service: showBook', function () {

  // load the service's module
  beforeEach(module('blloonSearchApp'));

  // instantiate service
  var showBook;
  beforeEach(inject(function (_showBook_) {
    showBook = _showBook_;
  }));

  it('should do something', function () {
    expect(!!showBook).toBe(true);
  });

});
