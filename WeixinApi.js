(function(window) {
    document.write('<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"><\/script>');
    var WeixinApi = {
        version: 4.3
    };
    window.WeixinApi = WeixinApi;
    var define_init = function(readyCallback, that) {
        var config_init = function(data) {
            wx.config({
                appId: data['appId'],
                timestamp: data['timestamp'],
                nonceStr: data['nonceStr'],
                signature: data['signature'],
                jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard']
            });
            wx.ready(function() {
                readyCallback(that)
            });
            wx.error(function(res) {})
        };
        $.getJSON('http://app.appgame.com/api/weixin/ticket.php?r=' + Math.random() + '&url=' + encodeURIComponent(document.location.href) + '&callback=?', 
        function(data) {
            if (data) {
                config_init(data)
            }
        })
    };
    WeixinApi.shareToTimeline = function(data) {
        wx.onMenuShareTimeline(data)
    };
    WeixinApi.shareToFriend = function(data) {
        wx.onMenuShareAppMessage(data)
    };
    WeixinApi.shareToWeibo = function(data) {
        wx.onMenuShareWeibo(data)
    };
    WeixinApi.shareToQQ = function(data) {
        wx.onMenuShareQQ(data)
    };
    WeixinApi.generalShare = function(data) {};
    WeixinApi.ready = function(readyCallback) {
        define_init(readyCallback, this)
    };
    WeixinApi.openInWeixin = function() {
        return /MicroMessenger/i.test(navigator.userAgent)
    }
})(window);