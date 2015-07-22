'use strict';

/**
 * @ngdoc directive
 * @name githubDirectoryApp.directive:appInfo
 * @description
 * # appInfo
 */
angular.module('githubDirectoryApp')
  .directive('appInfo', function () {
    return {
      restrict: 'AE',
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
    };
  });
