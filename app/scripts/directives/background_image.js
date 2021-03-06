'use strict';

/**
 * @ngdoc directive
 * @name blloonSearchApp.directive:backgroundImage
 * @description
 * # backgroundImage
 */
angular.module('blloonSearchApp')
  .directive('backgroundImage', function ($document) {
    return {
      restrict: 'A',
      scope: {
        backgroundImage: '='
      },
      link: function(scope, element) {
        scope.$watch('backgroundImage', function () {
          var src = scope.backgroundImage;
          if (src) {
            var img = $document[0].createElement('img');
            img.onload = function() {
              element.css({
                backgroundImage: 'url(' + this.src + ')'
              });
              element.addClass('loaded');
            };
            img.src = src;
          }
        });
      }
    };
  });
