;(function($){
    ;(function(){
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
        var screenScale = screenWidth/640;
        var userAgent = navigator.userAgent;
        var reg = /Android (\d+\.\d+)/;
        if(reg.test(userAgent)){
            var v = parseFloat(RegExp.$1);
            if(v >= 2.3){
                $('meta[name=viewport]').attr({content:'width=640,initial-scale='+screenScale+',minimum-scale='+screenScale+',maximum-scale='+screenScale+',target-densitydpi=device-dpi,user-scalable=no'});
            }else{
                $('meta[name=viewport]').attr({content:'width=640, target-densitydpi=device-dpi,user-scalable=no'});
            }
        }else{
            $('meta[name=viewport]').attr({content:'width=640, user-scalable=no, target-densitydpi=device-dpi,user-scalable=no'});
        }
    })();
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;  
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
})(jQuery);