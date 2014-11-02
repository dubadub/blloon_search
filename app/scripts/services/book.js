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
      'http://turbine-staging-eu.herokuapp.com/books/:bookId', { bookId: '@udid' }, {
        query: {
          params: { per_page: blloonConfig.perPage },
          isArray: true
        }
      }

    );
  });
