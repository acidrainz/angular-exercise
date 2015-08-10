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
          subnavs: [
                  {
                    'title': 'Registrants List',
                    'link': '/registrants',
                  },
                   {
                    'title': 'Add Registrants',
                    'link': '/add-registrant'
                  },
                  {
                    'title': 'Delete Registrants',
                    'link': '/delete-registrants'
                  }]

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
