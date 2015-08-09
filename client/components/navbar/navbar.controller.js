(function() {
    'use strict';
    var controller = (function() {
        var vm;
        var location;

        controller.$inject = ['$location'];

        function controller($location) {
            vm = this;
            location = $location;
            vm.isCollapsed = true;
            vm.menu = [{
                    'title': 'Home',
                    'link': '/'
                }, {
                    'title': 'Registrants',
                    'link': '/registrants',
                    subnavs: {
                        'title': 'Add Registrants',
                        'link': '/create-registrants'
                    }

                }, {
                    'title': 'Gallery',
                    'link': '/gallery'
                }

            ];

        }

        controller.prototype.isActive = function(route) {
            return route === location.path();
        }



        return controller;
    })();
    angular
        .module('angularExerciseApp')
        .controller('NavbarCtrl', controller);


})();

