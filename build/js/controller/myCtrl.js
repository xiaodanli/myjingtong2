define(['../js/controller/module.js'],function(controllers){
    controllers.controller('myCtrl',function($scope,$rootScope){
    	$rootScope.headTitle = $rootScope.title = "我的";
    	$rootScope.isFoot = true;
        $rootScope.home = false;
        $rootScope.bid = false;
        $rootScope.my = true;
    })
})