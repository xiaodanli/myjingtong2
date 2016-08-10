define(['../js/controller/module.js'],function(controllers){
    controllers.controller('homeCtrl',function($scope,$rootScope,$http){
        $rootScope.headTitle = $rootScope.title = "鲸通";
        $rootScope.isFoot = true;
        /*$http.get("http://192.168.0.148:1234/json/list.json")               // 获取相对地址的数据
        .success(function (response, status, headers, config) {    //成功时的处理
            $scope.lists = response;
        })
        .error(function (response, status, headers, config) {       //失败时的处理，status  代表状态码 403等！
            alert("2")
        });*/
    })
    .controller("myTelCtrl",function($scope,$rootScope){
    	$rootScope.headTitle = $rootScope.title = "主产品问题";
    	$rootScope.isFoot = false;
    })
    
})