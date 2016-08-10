require.config({
	paths:{
		baseUrl:"./",
		'angular': 'libs/angular.min',
        'angular-route': 'libs/angular-ui-router',
        'domReady': 'libs/domReady',
        /*一些库文件*/
		"router":"router",
		"app":"app",
		"service":"service",
		"angular-resource":"libs/angular-resource.min"
	},
	shim:{
		"angular":{
			exports: 'angular'
		},
		"angular-route":{
			deps: ['angular'],
			exports:"angular-router"
		},
		"angular-resource":{
			deps: ['angular'],
			exports:"angular-resource"
		}
	},
	deps:['bootstrap'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
})

