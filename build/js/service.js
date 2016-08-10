define(["app"],function(app){
	/*return app.factory('phone',function($resource){
		return $resource('phone/:phoneId.json',{},{
			query:{method:'GET',param:{phoneId:'phones'},isArray:true}
		})
	})*/
	return app.factory('instance', function(){
	    return {
	    	readonly:false,
	    	depositTxt:true,
	    	star1:0,
	    	star2:0
	    };
	});
})