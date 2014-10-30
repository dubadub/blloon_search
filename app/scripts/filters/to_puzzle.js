'use strict';

/**
 * @ngdoc filter
 * @name blloonSearchApp.filter:toPuzzle
 * @function
 * @description
 * # toPuzzle
 * Filter in the blloonSearchApp.
 */
angular.module('blloonSearchApp')
  .filter('toPuzzle', function ($cacheFactory) {
    var arrayCache = $cacheFactory('toPuzzle'),
      pattern = [
        2, 1, 2, 2, 2,
        2, 2, 2, 2, 1,
        1, 2, 2, 2, 2,
        2, 2, 2, 1, 2,
        1, 2, 2, 2, 2,
        2, 2, 2, 2, 1
      ];

    return function (input) {

      var output = [], cursor = 0, index = 0, cachedOutput,
        jsonArr = JSON.stringify(input);

      while (index < input.length) {
        output.push(input.slice(index, index + pattern[cursor]));
        index  += pattern[cursor];
        cursor += 1;
      }

      cachedOutput = arrayCache.get(jsonArr);

      if (JSON.stringify(cachedOutput) === JSON.stringify(output)) {
        return cachedOutput;
      }

      arrayCache.put(jsonArr, output);

      return output;
    };
  });
