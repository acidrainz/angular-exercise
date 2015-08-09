(function() {

    'use strict';
    var controller = (function() {
        var vm;
        var location;
        var registrantService;
        controller.$inject = ['$location', 'RegistrantService'];

        function controller($location, RegistrantService) {
            vm = this;
            registrantService = RegistrantService;
            location = $location;
        }


        controller.prototype.addRegistrant = function() {
            location.path('/add-registrant');
        }
        controller.prototype.submitForm = function() {
            registrantService.addRegistrant(vm.registrant)
                      .success(function(data, status, headers, config){
                          location.path('/registrants');
                      })
                      .error(function(data, status, headers, config){
                        console.log('error');
                      });
        }
        return controller;
    })();

    angular
        .module('angularExerciseApp')
        .controller('AddRegistrantsCtrl', controller);


})();