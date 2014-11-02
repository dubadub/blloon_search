'use strict';

/**
 * @ngdoc function
 * @name blloonSearchApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the blloonSearchApp
 */
angular.module('blloonSearchApp')
  .controller('BookCtrl', function ($modalInstance, $scope, $state, $stateParams, Book, previousState) {

    $scope.book = Book.get({ bookId: $stateParams.bookId });

    $scope.close = function() {
      $modalInstance.dismiss('close');
    };

    $modalInstance.result.finally(function() {
      if (previousState.get('modalInvoker')) {
        previousState.go('modalInvoker');
      } else {
        $state.go('main.search');
      }
    });

    $scope.$on('$stateChangeStart', function(evt, toState) {
      if (!toState.$$state().includes.book) {
        $modalInstance.dismiss('close');
      }
    });
  });
