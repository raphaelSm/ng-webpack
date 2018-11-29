import angular from 'angular';
//import angularroute from 'angular-route';
//import angularanimate from 'angular-animate';
import Bootstrap from 'bootstrap/scss/bootstrap.scss';


import 'jquery';
require("angular-route");
require("angular-animate");

import '../style/app.scss';


const MODULE_NAME = 'app';

var myApp = angular.module(MODULE_NAME, ['ngRoute', 'ngAnimate'])
  //.directive('app', app)
  //.controller('AppCtrl', AppCtrl);


myApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
      template: require('./home.html'),
      controller : "AppCtrl",
      controllerAs: "app"       
    })
    .when("/simple-site-1", {
      template: require('./simple-site-1.html'),
      controller : "AppCtrl",
      controllerAs: "app"       
    })
    .when("/simple-site-2", {
      template: require('./simple-site-2.html'),
      controller : "AppCtrl",
      controllerAs: "app"       
    })
      .otherwise({
        template : "<main class='py-5 text-center'><h1>Sorry page not found</h1></main>",
    });
    // disable #! in url inject $locationProvider to conf
    $locationProvider.html5Mode(true);
  });

myApp.controller("AppCtrl", function ($scope) {
    $scope.test = "I love Paris";
});

export default MODULE_NAME;

