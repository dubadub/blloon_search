'use strict';

/**
 * @ngdoc service
 * @name blloonSearchApp.Book
 * @description
 * # Book
 * Factory in the blloonSearchApp.
 */
angular.module('blloonSearchApp')
  .factory('Book', function ($resource) {
    return $resource(
      'http://turbine-production-eu.herokuapp.com/books?q=:query&per_page=36',
      {}
    );
  });
