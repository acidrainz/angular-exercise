
(function(){
      'use strict'
      var controller = (function(){
               var vm;
               var userService;
               var location;
               controller.$inject = ['UserService','$location'];
               function controller(UserService,$location){
                  vm =this;
                  location = $location;
                  userService = UserService;
                  vm.loadData();
              }

              controller.prototype.editUser = function(id){

                  location.path('/gallery-edit/' + id);
              }

               controller.prototype.deleteUser = function(id){
                   userService.removeUser(id)
                      .success(function(data, status, headers, config){
                          vm.loadData();
                      })
                      .error(function(data, status, headers, config){
                        console.log('error');
                      });
              }
              controller.prototype.loadData = function(){
                    userService.getAllUsers()
                      .success(function(data, status, headers, config){
                         vm.lists = data;
                      })
                      .error(function(data, status, headers, config){
                        console.log('error');
                      });
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
          .controller('GalleryCtrl',controller);

})();










