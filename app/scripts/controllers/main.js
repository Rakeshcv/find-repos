'use strict';

/**
 * @ngdoc function
 * @name githubDirectoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubDirectoryApp
 */
angular.module('githubDirectoryApp')
  .controller('MainCtrl', ['$scope','githubservice',function ($scope,githubservice) {

    $scope.repoOrder = 'name';
    $scope.fetchData = function(){
      $('#spinner').show();
      //check for empty string as HTML5 "required" doesn't work in safari
      if($scope.query === '' || $scope.query === undefined){
        window.alert('Field can\'t be blank');
        $('#spinner').hide();
        return;
      }

      //call githubservice
      githubservice.getUser($scope.query).then(onSuccess,onError);
    };

    var onSuccess = function(response){
      var repoUrl = response.repos_url;
      githubservice.getRepos(repoUrl).then(onComplete,onError);
    };

    var onComplete = function(response){
      $scope.error = false;
      $scope.data = response;
      if($scope.data.length === 0){
        $scope.message = 'No repository found for '+ $scope.query;
      }
      $('#spinner').hide();
    };

    var onError = function(){
      $scope.error = true;
      $scope.data = 'No account found for ' + $scope.query;
      $('#spinner').hide();
    };

    $scope.checkInput = function () {
      if ($scope.query === '' || $scope.query === undefined) {
        $scope.data = null;
        $scope.error = null;
      }
    };

  }]);
