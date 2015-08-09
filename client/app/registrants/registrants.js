'use strict';

angular.module('angularExerciseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registrants', {
        url: '/registrants',
        templateUrl: 'app/registrants/registrants.html',
        controller: 'RegistrantsCtrl',
        controllerAs:'vm'
      })
      .state('add-registrant', {
        url: '/add-registrant',
        templateUrl: 'app/registrants/add-registrant.html',
        controller: 'AddRegistrantsCtrl',
        controllerAs:'vm'

      });
  });