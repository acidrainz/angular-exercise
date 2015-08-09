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
            vm.loadData();
        }
        controller.prototype.loadData = function() {
            registrantService.getAllRegistrants()
                .success(function(data, status, headers, config) {
                    vm.registrantsList = data;
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }
        controller.prototype.addRegistrant = function(){
        	 location.path('/add-registrant');
        }
        controller.prototype.deleteRegistrant = function(id){

             registrantService.removeRegistrant(id)
                .success(function(data, status, headers, config) {
                    vm.loadData();
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }
        return controller;
    })();

    angular
        .module('angularExerciseApp')
        .controller('RegistrantsCtrl', controller);


})();