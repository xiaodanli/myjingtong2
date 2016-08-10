define(['../js/directive/module.js'], function(directives) {
    directives.directive('star', function() {
        return {
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                readonly: '@',
                onHover: '=',
                onLeave: '='
            },
            controller: function($scope,instance) {
                $scope.ratingValue = $scope.ratingValue || 0;
                $scope.max = $scope.max || 5;
                $scope.click = function(val) {
                    $scope.$watch('readonly', function(oldVal, newVal) {
                        $scope.readonly = instance.readonly;
                        if ($scope.readonly && $scope.readonly === 'true') {
                            return;
                        }
                        $scope.ratingValue = val;
                    });
                };
            },
            link: function(scope, elem, attrs) {
                var updateStars = function() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                updateStars();

                scope.$watch('ratingValue', function(oldVal, newVal) {
                    updateStars();
                 });
                scope.$watch('max', function(oldVal, newVal) {
                    updateStars();
                });
            }
        };
    });
})
