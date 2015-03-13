'use strict';

/**
 * @ngdoc overview
 * @name boilerAngularApp
 * @description
 * # boilerAngularApp
 *
 * Main module of the application.
 */
var boilerAngularApp = angular.module('boilerAngularApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch', 'ngProgress']);

boilerAngularApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            redirectTo: '404.html'
        });

    //use the HTML5 History API
    $locationProvider.html5Mode(true);
});

boilerAngularApp.run(function($rootScope, ngProgress) {
    ngProgress.color('red');
    $rootScope.$on('$routeChangeStart', function() {
        ngProgress.start();
    });

    $rootScope.$on('$routeChangeSuccess', function() {
        ngProgress.complete();
    });
    // Do the same with $routeChangeError
});