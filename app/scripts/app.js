'use strict';

/**
 * @ngdoc overview
 * @name edpAngularApp
 * @description
 * # edpAngularApp
 *
 * Main module of the application.
 */
var edpAngularApp = angular.module('edpAngularApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch']);

    edpAngularApp.config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '404.html'
            });

        //use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
