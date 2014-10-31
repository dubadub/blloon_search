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
  .filter('toPuzzle', function ($cacheFactory, blloonConfig, lodash) {
    var arrayCache = $cacheFactory('toPuzzle'),
      pattern = [
        2, 1, 2, 2, 2,
        2, 2, 2, 2, 1,
        1, 2, 2, 2, 2,
        2, 2, 2, 1, 2,
        1, 2, 2, 2, 2,
        2, 2, 2, 2, 1
      ];

    function calculateDigest (arr) {
      if (arr === undefined) { return; }

      return lodash.pluck(arr.slice(0, blloonConfig.perPage), 'udid').join();
    }

    return function (input) {
      if (input.length === 0) { return input; }

      var output = [], cursor = 0, index = 0, cachedOutput,
        digest = calculateDigest(input),

        /**
         * Create subarrays only for first page to avoid flickering
         */
        partsCount = input.length <= blloonConfig.perPage ? input.length : blloonConfig.perPage;

      while (index < partsCount) {
        output.push(input.slice(index, index + pattern[cursor]));
        index  += pattern[cursor];
        cursor += 1;
      }

      cachedOutput = arrayCache.get(digest);

      if (calculateDigest(cachedOutput) === calculateDigest(output)) {
        if (input.length > blloonConfig.perPage) {
          cachedOutput = cachedOutput.concat(input.slice(blloonConfig.perPage));
        }
        return cachedOutput;
      }

      arrayCache.put(digest, output);

      if (input.length > blloonConfig.perPage) {
        output = output.concat(input.slice(blloonConfig.perPage));
      }

      return output;
    };
  });
