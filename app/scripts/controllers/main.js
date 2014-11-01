'use strict';

/**
 * @ngdoc function
 * @name blloonSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blloonSearchApp
 */
angular.module('blloonSearchApp')
  .controller('MainCtrl', function ($location, $scope, blloonConfig, Book) {
    var totalCount = 130, page = 0;

    $scope.query = $location.search().search || '';
    $scope.books = [];

    $scope.$watch('query', function (query) {
      $scope.isLoading = true;
      $scope.books = Book.query({ query: query, page: page = 0 }, function (books, headers) {
        $scope.isLoading = false;
        totalCount = headers('total');
      });
    });

    /**
    * Infinit scroll
    */

    $scope.loadMore = function () {
      $scope.isLoading = true;
      Book.query({ query: $scope.query, page: ++page }, function (books) {
        $scope.isLoading = false;
        $scope.books = $scope.books.concat(books);
      });
    };

    $scope.canLoadMore = function () {
      return $scope.books.length && !$scope.isLoading && $scope.isMoreAvailiable();
    };

    $scope.isMoreAvailiable = function () {
      return (page + 1) * blloonConfig.perPage < totalCount;
    }

    /**
    * Two-way binding between URL search parameter and $scope.query.
    */

    $scope.$watch(function () { return $location.search(); }, function() {
      $scope.query = $location.search().search || '';
    });

    $scope.$watch('query', function(query) {
      if (query) {
       $location.search('search', query);
      } else {
        $location.url($location.path());
      }
    });
  });
