
(function(){
      'use strict'
      var controller = (function(){
               var vm;
               var userService;
               controller.$inject = ['UserService','$stateParams'];
               function controller(UserService,$stateParams){
                  vm =this;
                  var id = $stateParams.id;
                  userService = UserService;
                  userService.getUser(id)
                      .success(function(data, status, headers, config){
                        console.log(data);
                         vm.data = data;



                      })
                      .error(function(data, status, headers, config){
                        console.log('error');
                      });
              }

              return controller;

      })();




      angular
          .module('sampleApp')
          .controller('GalleryEditCtrl',controller);



})();
