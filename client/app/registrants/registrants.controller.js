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
                    vm.lists = data;
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }
        controller.prototype.addRegistrant = function(){
        	 location.path('/add-registrant');
        }
        return controller;
    })();

    angular
        .module('angularExerciseApp')
        .controller('RegistrantsCtrl', controller);


})();