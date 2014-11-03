'use strict';

/**
 * @ngdoc directive
 * @name blloonSearchApp.directive:scrollTo
 * @description
 * # scrollTo
 */
angular.module('blloonSearchApp')
  .directive('scrollTo', function ($timeout, $window) {

    function scroll (settings) {
      return function () {
        var scrollPane = angular.element(settings.container);
        var scrollTo = (typeof settings.scrollTo === 'number') ? settings.scrollTo : angular.element(settings.scrollTo);
        var scrollY = (typeof scrollTo === 'number') ? scrollTo : scrollTo.offset().top - settings.offset;

        scrollPane.animate({scrollTop : scrollPane.scrollTop() + scrollY - $window.scrollY }, settings.duration, settings.easing);
      };
    }

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var settings = angular.extend({
          container: 'html, body',
          scrollTo: angular.element(),
          offset: 0,
          duration: 150,
          easing: 'swing'
        }, attrs);

        element.on('click', function () {
          $timeout(scroll(settings));
        });
      }
    };
  });
