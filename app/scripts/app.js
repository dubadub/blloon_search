'use strict';

/**
 * @ngdoc overview
 * @name blloonSearchApp
 * @description
 * # blloonSearchApp
 *
 * Main module of the application.
 */
angular
  .module('blloonSearchApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngLodash',
    'debounce',
    'infinite-scroll',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  });
