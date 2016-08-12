define(['../js/directive/module.js'], function(directives) {
    directives.directive('star', function() {
        return {
            template: '<ul class="rating" count="{{count}}">' +
                '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: true,
            controller: function($scope,instance) {
                $scope.ratingValue = $scope.count || 0;
                $scope.click = function(val) {
                    $scope.$watch('readonly', function(oldVal, newVal) {
                        $scope.readonly = instance.readonly;
                        if ($scope.readonly && $scope.readonly === 'true') {
                            return;
                        }
                        $scope.ratingValue = val;
                        $scope.count = $scope.ratingValue;
                    });
                };
            },
            link: function(scope, elem, attrs) {
                var updateStars = function() {
                    scope.stars = [];
                    for (var i = 0; i < 5; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                updateStars();
                scope.$watch('ratingValue', function(oldVal, newVal) {
                    updateStars();
                });
            }
        };
    })
    .directive("swiper",function($timeout){
        return {
            restrict:"AE",
            link:function(scope,elem,attr){
                scope.swiper = null;
                $timeout(function(){
                    scope.swiper = new Swiper(elem, {
                        loop: true,
                        pagination: '.swiper-pagination',
                        autoplay: 1000,
                        speed: 500
                    });
                },0)
            }
        }
    });
})
