define(["angular",
        'mainController',
        'mainDirctive',
      ],function(angular){
    return angular.module("webapp",['ngResource','ui.router','webapp.controllers','webapp.directives']);
})