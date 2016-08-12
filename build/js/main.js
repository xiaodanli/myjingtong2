require.config({
	paths:{
		baseUrl:"./",
		'angular': 'libs/angular.min',
        'angular-route': 'libs/angular-ui-router',
        "angular-resource":"libs/angular-resource.min",
        "swiper":"libs/swiper.min",
        'domReady': 'libs/domReady',
        /*一些库文件*/
		"router":"router",
		"app":"app"
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
		},
		"swiper":{
			exports:"swiper"
		}
	},
	deps:['bootstrap'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
})

