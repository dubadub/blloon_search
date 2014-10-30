'use strict';

describe('Service: Book', function () {

  // load the service's module
  beforeEach(module('blloonSearchApp'));

  // instantiate service
  var Book;
  beforeEach(inject(function (_Book_) {
    Book = _Book_;
  }));

  it('should not fail', function () {
    expect(!!Book).toBe(true);
  });

});
