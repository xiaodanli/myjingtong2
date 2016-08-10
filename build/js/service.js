define(["app"],function(app){
	return app.factory('phone',function($resource){
		return $resource('phone/:phoneId.json',{},{
			query:{method:'GET',param:{phoneId:'phones'},isArray:true}
		})
	})
})