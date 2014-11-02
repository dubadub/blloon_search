'use strict';

/**
 * @ngdoc function
 * @name blloonSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blloonSearchApp
 */
angular.module('blloonSearchApp')
  .controller('MainCtrl', function ($location, $scope, $state, $urlRouter, blloonConfig, Book) {
    var totalCount, page = 0; $scope.books = [];
    $scope.query = $location.search().search || '';

    var search = function (params) {
      $scope.isLoading = true;
      return Book.query(params, function (books, headers) {
        $scope.isLoading = false;
        totalCount = headers('total');
      });
    }

    $scope.$watch('query', function (query) {
      if (query) {
        $scope.books = search({ q: query, page: page = 0 });
      } else {
        $scope.books = [];
      }
    });

    /**
    * Infinite scroll
    */

    $scope.loadMore = function () {
      search({ q: $scope.query, page: ++page }).$promise.then(function (books) {
        $scope.books = $scope.books.concat(books);
      });
    };

    $scope.isMoreAvailiable = function () {
      return (page + 1) * blloonConfig.perPage < totalCount;
    };

    $scope.canLoadMore = function () {
      return $scope.books.length && !$scope.isLoading && $scope.isMoreAvailiable();
    };

    /**
    * Two-way binding between URL search parameter and $scope.query.
    */
    $scope.$watch(function () { return $state.params.search; }, function(search) {
      if ($state.is('main.search')) {
        $scope.query = search;
      }
    });

    $scope.$watch('query', function(query) {
      if (query) {
        $location.search('search', query);
      } else {
        $location.url($location.path());
      }
    });

  });
