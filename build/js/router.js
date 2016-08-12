define(["app"],
    function(app) {
        return app.run([
                '$rootScope',
                '$state',
                '$stateParams',
                'URL_PATH',
                function($rootScope, $state, $stateParams,URL_PATH) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                    $rootScope.URL_PATH = URL_PATH;
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
                            '': {
                                templateUrl: "../tpls/main.html",
                                controller: "homeCtrl"
                            },
                            "top@index": {
                                templateUrl: "tpls/home/top.html",
                                controller: function($scope, $rootScope, $stateParams, $http, $log) {
                                    $rootScope.isFoot = true;
                                    $rootScope.headTitle = $rootScope.title = "鲸通";
                                }
                            },
                            "footer@index": {
                                templateUrl: "tpls/home/footer.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.footActive = 'home';
                                }
                            }
                        }
                    })
                    //首页
                    .state("index.home", {
                        url: "home",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/top.html",
                                controller: "homeCtrl"
                            }
                        }
                    })
                    //装电话
                    .state("index.tel", {
                        url: "tel",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/tel.html",
                                controller: "myTelCtrl"
                            }
                        }
                    })
                    //需求分析结果页
                    .state("index.demand", {
                        url: "demand",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/demand.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "需求分析结果页";
                                }
                            }
                        }
                    })
                    //有附加题的分析结果页
                    .state("index.demandX", {
                        url: "demandX",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/demand-x.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "需求分析结果页";
                                }
                            }
                        }
                    })
                    //选择网络产品
                    .state("index.choose", {
                        url: "choose",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/choose.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "选择网络产品";
                                }
                            }
                        }
                    })
                    //普通用户提交招标页
                    .state("index.sub", {
                        url: "sub",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/sub.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "提交招标";
                                }
                            }
                        }
                    })
                    //销售员提交招标页
                    .state("index.subX", {
                        url: "subX",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/sub-x.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "提交招标";
                                }
                            }
                        }
                    })
                    // 主产品问题 有附加产品的
                    .state("index.telNext", {
                        url: "telNext",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/tel-next.html",
                                controller: "myTelCtrl"
                            }
                        }
                    })
                    //附加产品问题
                    .state("index.attach", {
                        url: "attach",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/attach.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "附加产品问题";
                                }
                            }
                        }
                    })
                    //专属定制的问题页
                    .state("index.exc", {
                        url: "exc",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/home/exc.html",
                                controller: "myTelCtrl"
                            }
                        }
                    })
                    //招标页
                    .state("index.bid", {
                        url: "bid",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/bid.html",
                                controller: "bidCtrl"
                            }
                        }
                    })
                    //招标中的招标详情
                    .state("index.bidding", {
                        url: "bidding/:inboxId",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/bidding.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "招标详情";
                                }
                            }
                        }
                    })
                    //提交后跳转页
                    .state("index.biddingS", {
                        url: "biddingS/:inboxId",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/bidding-start.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "招标详情";
                                }
                            }
                        }
                    })
                    //中标的招标详情
                    .state("index.bidDetail", {
                        url: "bidDetail",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/bidDetail.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "招标详情";
                                }
                            }
                        }
                    })
                    // 订单详情页
                    .state("index.orderDetail", {
                        url: "orderDetail",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/orderDetail.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "订单详情";
                                }
                            }
                        }
                    })
                    //施工方概况
                    .state("index.company", {
                        url: "company",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/company.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "施工方概况";
                                }
                            }
                        }
                    })
                    //预付定金页
                    .state("index.pay", {
                        url: "pay",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/pay.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "预付定金";
                                }
                            }
                        }
                    })
                    //我的施工地址页
                    .state("index.address", {
                        url: "address",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/address.html",
                                controller: function($scope, $rootScope, $stateParams,$http,Address) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "我的施工地址";
                                    var address = Address.getAddress;
                                    address.get(function(res){
                                        alert(res);
                                    });
                                }
                            }
                        }
                    })
                    // 编辑地址页
                    .state("index.edit", {
                        url: "edit",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/edit.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "我的施工地址";
                                }
                            }
                        }
                    })
                    // 支付成功页
                    .state("index.success", {
                        url: "success",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/bid/pay-success.html",
                                controller: function($scope, $rootScope, $stateParams) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "支付成功";
                                }
                            }
                        }
                    })
                    // 我的
                    .state("index.my", {
                        url: "my",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/my.html",
                                controller: "myCtrl"
                            }
                        }
                    })
                    // 施工
                    .state("index.construction", {
                        url: "construction",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/construction.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "施工";
                                }
                            }
                        }
                    })
                    //订单
                    .state("index.order", {
                        url: "order",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/order.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "订单";
                                }
                            }
                        }
                    })
                    //点评页
                    .state("index.deposit", {
                        url: "deposit",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/bidDetail.html",
                                controller: function($scope, $rootScope, instance) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "订单详情";
                                    if (instance.depositTxt) {
                                        $scope.deposit = "点评一下";
                                    } else {
                                        $scope.deposit = "查看点评";
                                    }
                                }
                            }
                        }
                    })
                    // 发表点评页
                    .state("index.remark", {
                        url: "remark",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/remark.html",
                                controller: function($scope, $rootScope, instance) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "订单详情";
                                    $scope.depositTxt = instance.depositTxt;
                                    $scope.publish = function() {
                                        instance.readonly = 'true';
                                        instance.depositTxt = false;
                                        $scope.depositTxt = instance.depositTxt;
                                    }
                                }
                            }
                        }
                    })
                    // 帮助页
                    .state("index.help", {
                        url: "help",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/help.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "帮助中心";
                                }
                            }
                        }
                    })
                    // 消息页
                    .state("index.news", {
                        url: "news",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/news.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "消息";
                                }
                            }
                        }
                    })
                    // 消息详情页
                    .state("index.newsDetail", {
                        url: "newsDetail",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/news-detail.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "消息";
                                }
                            }
                        }
                    })
                    // 设置页
                    .state("index.set", {
                        url: "set",
                        views: {
                            "top@index": {
                                templateUrl: "../tpls/my/set.html",
                                controller: function($scope, $rootScope) {
                                    $rootScope.isFoot = false;
                                    $rootScope.headTitle = $rootScope.title = "设置";
                                }
                            }
                        }
                    })

            })
    })
