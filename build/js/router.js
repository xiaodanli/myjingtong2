define(["app"],
    function(app) {
        return app.run([
                '$rootScope',
                '$state',
                '$stateParams',
                function($rootScope, $state, $stateParams) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ])
            .config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
                //用于改变state时跳至顶部
                $uiViewScrollProvider.useAnchorScroll();
                // 默认进入先重定向
                $urlRouterProvider.otherwise("/");
                $stateProvider.state("index", {
                    url: "/",
                    views: {
                        '':{
                            templateUrl:"../tpls/main.html",
                            controller:"homeCtrl"
                        },
                        "top@index":{
                            templateUrl:"tpls/home/home.html",
                            controller:function($scope,$rootScope,$stateParams,$http,$log){
                                $rootScope.isFoot = true;
                                $rootScope.headTitle = $rootScope.title = "鲸通";
                                /*$http.get("http://192.168.0.148:1234/json/list.json")               // 获取相对地址的数据
                                .success(function (response, status, headers, config) {    //成功时的处理
                                    $scope.lists = response;
                                })
                                .error(function (response, status, headers, config) {       //失败时的处理，status  代表状态码 403等！
                                    alert("2")
                                });*/
                            } 
                        },
                        "footer@index":{
                            templateUrl:"tpls/home/footer.html",
                            controller:function($scope){
                                $scope.footActive = 'home';
                            }
                        }
                    }
                })
                .state("index.home",{
                    url:"home",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/home/home.html",
                            controller:"homeCtrl"
                        }
                    }
                })
                .state("index.demand",{
                    url:"demand",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/home/demand.html",
                            controller:function($scope,$rootScope){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "需求分析结果页";
                            }
                        }
                    }
                })
                .state("index.sub",{
                    url:"sub",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/home/sub.html",
                            controller:function($scope,$rootScope){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "提交招标";
                            }
                        }
                    }
                })
                .state("index.bid",{
                    url:"bid",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/bid.html",
                            controller:"bidCtrl"
                        }
                    }
                })
                .state("index.bidding",{
                    url:"bidding/:inboxId",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/bidding.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "招标详情";
                            } 
                        }
                    }
                })
                .state("index.bidDetail",{
                    url:"bidDetail",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/bidDetail.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "招标详情";
                            } 
                        }
                    }
                })
                .state("index.orderDetail",{
                    url:"orderDetail",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/orderDetail.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "订单详情";
                            } 
                        }
                    }
                })
                .state("index.company",{
                    url:"company",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/company.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "施工方概况";
                            } 
                        }
                    }
                })
                .state("index.pay",{
                    url:"pay",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/pay.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "预付定金";
                            } 
                        }
                    }
                })
                .state("index.address",{
                    url:"address",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/address.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "我的施工地址";
                            } 
                        }
                    }
                })
                .state("index.edit",{
                    url:"edit",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/edit.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "我的施工地址";
                            } 
                        }
                    }
                }) 
                .state("index.success",{
                    url:"success",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/bid/pay-success.html",
                            controller:function($scope,$rootScope,$stateParams){
                                $rootScope.isFoot = false;
                                $rootScope.headTitle = $rootScope.title = "支付成功";
                            }
                        }
                    }
                })   
                .state("index.my",{
                    url:"my",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/my.html",
                            controller:"myCtrl"
                        }
                    }
                })
                .state("index.tel",{
                    url:"tel",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/home/tel.html",
                            controller:"myTelCtrl"
                        }
                    }
                })
                .state("index.exc",{
                    url:"exc",
                    views:{
                        "top@index":{
                            templateUrl:"../tpls/home/exc.html",
                            controller:"myTelCtrl"
                        }
                    }
                })

            })
    })
