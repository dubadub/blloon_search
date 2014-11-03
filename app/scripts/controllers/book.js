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
  })
  .directive('adjustViewportHeight', function ($timeout, $window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var box = angular.element(attrs.adjustViewportHeight);

        function adjust () {
          $timeout(function () {
            var boxWidth = box[0].offsetWidth,
              viewportHeight = $window.innerHeight - element.offset().top,
              fluidPadding = (viewportHeight/boxWidth) * 100;
              console.log(">>>>>", fluidPadding)
            // give box fluid padding to make responsive
            element.css( { paddingTop: fluidPadding + '%' });
          });
        }

        scope.$watch(function () {
          return box.height();
        }, adjust);

        angular.element($window).on('resize', adjust);
      }
    };
  });
