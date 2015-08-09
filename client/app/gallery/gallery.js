'use strict';

angular.module('sampleApp')
  .config(function ($stateProvider) {
        $stateProvider
          .state('gallery', {
            url: '/gallery',
            templateUrl: 'app/gallery/gallery.html',
            controller: 'GalleryCtrl',
            controllerAs:'vm'
          })

           .state('gallery-edit', {
            url: '/gallery-edit/:id',
            templateUrl: 'app/gallery/gallery.edit.html',
            controller: 'GalleryEditCtrl',
            controllerAs:'vm'
          })


          .state('gallery-create', {
            url: '/gallery-create',
            templateUrl: 'app/gallery/gallery.create.html',
            controller: 'GalleryCreateCtrl',
            controllerAs:'vm'
          });


  });
