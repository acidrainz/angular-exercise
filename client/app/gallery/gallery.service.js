(function(){
  'use strict';

  var userService = (function(){
    var http;

    userService.$inject = ['$http'];

    function userService($http){
      http = $http;
    }

    userService.prototype.getAllUsers = function(){
        return http.get('/api/users');
    };

    userService.prototype.addUser = function(user){
        return http.post('/api/users',user);
      // users.push(user);
    };

    userService.prototype.getUser = function(id){
       return http.get('/api/users/'+id);
    };

    userService.prototype.removeUser = function(id){
         return http.delete('/api/users/'+id);
    };

    userService.prototype.updateUser = function(user, users){

    };

    return userService;
  })();

  angular
    .module('sampleApp')
    .service('UserService', userService);

})();
