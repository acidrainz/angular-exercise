'use strict';

angular.module('angularExerciseApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'flow',
        'ngFabForm'

    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })

