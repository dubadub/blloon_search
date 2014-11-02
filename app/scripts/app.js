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
    'ct.ui.router.extras',
    'debounce',
    'infinite-scroll',
    'ngAnimate',
    'ngLodash',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'truncate',
    'ui.bootstrap.modal',
    'ui.bootstrap.tpls'
  ])
  .config(function($stateProvider, $stickyStateProvider, $urlRouterProvider) {
    function showBookModal ($modal, $previousState, $state) {
      if ($state.includes('main')) {
        $previousState.memo('modalInvoker');
      }

      $modal.open({
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        resolve: {
          previousState: function () { return $previousState; }
        }
      });
    }

    $stateProvider.state('main', {
      abstract: true,
      url: '/',
      views: {
        'main@': {
          controller: 'MainCtrl',
          templateUrl: 'views/main.html'
        }
      },
      sticky: true
    })
    .state('main.search', {
      url: '?search'
    })
    .state('book', {
      url: '/book/:bookId',
      template: '<div ui-view></div>',
      onEnter: showBookModal
    });

    $urlRouterProvider.otherwise('/');
  });
