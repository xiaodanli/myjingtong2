define(['../js/service/module.js'],function(service){
    service.factory('instance', function(){
	    return {
	    	readonly:false,
	    	depositTxt:true
	    };
	})
	.constant('URL_PATH','http://192.168.0.250:8080/jingtong')
	.factory('Address',['$resource','URL_PATH',function($resource,URL_PATH){
        return {
            getAddress: $resource(URL_PATH+'/user/address/list?uid=2')
        }
    }])
})