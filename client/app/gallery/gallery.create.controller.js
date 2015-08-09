
(function(){
      'use strict'
      var controller = (function(){
               var vm;
               var userService;
               var location;
               controller.$inject = ['UserService','$location'];
               function controller(UserService,$location){
                  vm =this;
                  userService = UserService;
                   location = $location;

              }

              controller.prototype.submitPost = function(){

                    userService.addUser(vm.data)
                      .success(function(data, status, headers, config){
                          location.path('/gallery');
                      })
                      .error(function(data, status, headers, config){
                        console.log('error');
                      });
              }

              return controller;

      })();




      angular
          .module('sampleApp')
          .controller('GalleryCreateCtrl',controller);



})();
