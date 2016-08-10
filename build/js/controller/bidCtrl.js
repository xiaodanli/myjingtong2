define(['../js/controller/module.js'],function(controllers){
    controllers.controller('bidCtrl',function($scope,$rootScope){
    	$rootScope.headTitle = $rootScope.title = "招标";
    	$rootScope.isFoot = true;
    })
    
})