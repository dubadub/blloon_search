'use strict';

describe('Service: blloonConfig', function () {

  // load the service's module
  beforeEach(module('blloonSearchApp'));

  // instantiate service
  var blloonConfig;
  beforeEach(inject(function (_blloonConfig_) {
    blloonConfig = _blloonConfig_;
  }));

  it('should do something', function () {
    expect(!!blloonConfig).toBe(true);
  });

});
