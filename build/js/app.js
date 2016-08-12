define(["angular",
        'mainController',
        'mainDirctive',
        'mainService'
      ],function(angular){
    return angular.module("webapp",['ngResource','ui.router','webapp.controllers','webapp.directives','webapp.service']);
})