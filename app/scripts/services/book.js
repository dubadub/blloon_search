'use strict';

/**
 * @ngdoc service
 * @name blloonSearchApp.Book
 * @description
 * # Book
 * Factory in the blloonSearchApp.
 */
angular.module('blloonSearchApp')
  .factory('Book', function ($resource, blloonConfig) {
    return $resource(
      'http://turbine-production-eu.herokuapp.com/books?q=:query&per_page=' + blloonConfig.perPage
    );
  });
