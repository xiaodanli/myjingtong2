define(['require',
        'angular',
        'angular-route',
        'router',
        'service',
        'angular-resource'
       ],function(require,angular){
            'use strict';
            require(['domReady!'],function(){
                angular.bootstrap(document,['webapp']);
            });
        });