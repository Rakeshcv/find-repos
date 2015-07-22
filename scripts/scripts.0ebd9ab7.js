"use strict";angular.module("githubDirectoryApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){var b=[{url:"/",config:{template:"<app-info></app-info>"}}];b.forEach(function(b){a.when(b.url,b.config)}),a.otherwise({redirectTo:"/"})}]),angular.module("githubDirectoryApp").controller("MainCtrl",["$scope","githubservice",function(a,b){a.repoOrder="name",a.fetchData=function(){return""===a.query||void 0===a.query?void window.alert("Field can't be blank"):($("#spinner").show(),void b.getUser(a.query).then(c,e))};var c=function(a){var c=a.repos_url;b.getRepos(c).then(d,e)},d=function(b){a.error=!1,a.data=b,0===a.data.length&&(a.message="No repository found for "+a.query),$("#spinner").hide()},e=function(){a.error=!0,a.data="No account found for "+a.query,$("#spinner").hide()};a.checkInput=function(){(""===a.query||void 0===a.query)&&(a.data=null,a.error=null)}}]),angular.module("githubDirectoryApp").directive("appInfo",function(){return{restrict:"AE",controller:"MainCtrl",templateUrl:"views/main.html"}}),angular.module("githubDirectoryApp").service("githubservice",["$http",function(a){var b=function(b){return a.get("https://api.github.com/users/"+b).then(function(a){return a.data})},c=function(b){return a.get(b).then(function(a){return a.data})};return{getUser:b,getRepos:c}}]);