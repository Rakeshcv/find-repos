'use strict';

/**
 * @ngdoc overview
 * @name githubDirectoryApp
 * @description
 * # githubDirectoryApp
 *
 * Main module of the application.
 */
angular
  .module('githubDirectoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(['$routeProvider', function ($routeProvider) {

    var routes = [
      {
        url: '/',
        config: {
          template: '<app-info></app-info>'
        }
      }
    ];

    routes.forEach(function (route) {
      $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({redirectTo: '/'});

  }]);

