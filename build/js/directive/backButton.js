define(['../js/directive/module.js'],function(directives){
    directives.directive('backButton',['$window',function($window){
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                ele.bind('click', function () {
                    $window.history.back();
                });
            }             
    	}
    }])
})
