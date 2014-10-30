'use strict';

/**
 * @ngdoc function
 * @name blloonSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blloonSearchApp
 */
angular.module('blloonSearchApp')
  .controller('MainCtrl', function ($scope, Book) {
    $scope.books = Book.query({ query: 'angular' });
  });
