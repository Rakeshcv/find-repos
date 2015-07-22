'use strict';

/**
 * @ngdoc service
 * @name githubDirectoryApp.githubservice
 * @description
 * # githubservice
 * Service in the githubDirectoryApp.
 */
angular.module('githubDirectoryApp')
  .service('githubservice', ['$http',function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var getUser = function(query){
      return $http.get('https://api.github.com/users/' + query).then(function (response) {
        return response.data;
      });
    };

    var getRepos = function(query){
      return $http.get(query).then(function (response) {
        return response.data;
      });
    };

    return{
      getUser: getUser,
      getRepos: getRepos
    };


  }]);
