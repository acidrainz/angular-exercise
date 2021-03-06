(function(){
  'use strict';

  var RegistrantService = (function(){
    var http;

    RegistrantService.$inject = ['$http'];

    function RegistrantService($http){
      http = $http;
    }

    RegistrantService.prototype.getAllRegistrants = function(){
        return http.get('/api/registrants');
    };

    RegistrantService.prototype.addRegistrant = function(registrant){
        return http.post('/api/registrants',registrant);

    };

    RegistrantService.prototype.getRegistrant = function(id){
       return http.get('/api/registrants/'+id);
    };

    RegistrantService.prototype.removeRegistrant = function(id){
         return http.delete('/api/registrants/'+id);
    };

    RegistrantService.prototype.uploadProfilePic = function(data){
         return http.post('/api/uploads/'+data);
    };

    RegistrantService.prototype.updateRegistrant = function(registrant, registrants){

    };

    return RegistrantService;
  })();

  angular
    .module('angularExerciseApp')
    .service('RegistrantService', RegistrantService);

})();
