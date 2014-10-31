'use strict';

describe('Directive: booksBlock', function () {

  // load the directive's module
  beforeEach(module('blloonSearchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<books-group></books-group>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the booksBlock directive');
  }));
});
