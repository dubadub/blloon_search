'use strict';

/**
 * @ngdoc directive
 * @name blloonSearchApp.directive:booksBlock
 * @description
 * # booksBlock
 */
angular.module('blloonSearchApp')
  .directive('booksBlock', function ($compile, lodash) {
    var COLORS = ['lime','green','gold','purple','orange','red'];

    var twoYTemplate = '<a class="book" ui-sref="book({ bookId: book.udid})" ng-repeat="book in booksBlock"><div class="book-cover" background-image="book.small_cover_image_url"></div></a>',
     featureTemplate = '<a class="book" ui-sref="book({ bookId: booksBlock[0].udid})"><div class="book-cover" background-image="booksBlock[0].medium_cover_image_url"></div></a>',
     defaultTemplate = '<a class="book" ui-sref="book({ bookId: booksBlock.udid})"><div class="book-cover" background-image="booksBlock.small_cover_image_url"></div></a>';

    var getTemplate = function(booksBlock) {
      var template = '';

      switch (booksBlock.length) {
        case 1:
          template = featureTemplate;
          break;
        case 2:
          template = twoYTemplate;
          break;
        case undefined:
          template = defaultTemplate;
          break;
      }

      return template;
    };

    var getClass = function(booksBlock) {
      var clazz = '';

      switch (booksBlock.length) {
        case 1:
          // Probably booksBlock[0].brand_color should be used
          clazz = 'feature ' + lodash.sample(COLORS);
          break;
        case 2:
          clazz = 'two-y';
          break;
      }

      return clazz;
    };

    var linker = function(scope, element) {
      var template = getTemplate(scope.booksBlock),
             clazz = getClass(scope.booksBlock);

      element.html(template).addClass(clazz).show();
      $compile(element.contents())(scope);
    };

    return {
      restrict: 'A',
      link: linker,
      scope: {
          booksBlock: '='
      }
    };
  });
