/**!
 * appgame微信内置浏览器的Javascript API，功能包括：
 *
 * 1、分享到微信朋友圈
 * 2、分享给微信好友
 * 3、分享到腾讯微博
 */
(function (window) {
    document.write('<script type="text/javascript" src="http://h5.static.myappgame.com/common/jweixin-1.0.0.js?ver=' + Math.random() + '"><\/script>');
    var WeixinApi = {
        version: 4.3
    };
    window.WeixinApi = WeixinApi;
    var define_init = function (readyCallback, that) {
        var config_init = function (data) {
            wx.config({
                //debug:true,
                appId: data['appId'],
                timestamp: data['timestamp'],
                nonceStr: data['nonceStr'],
                signature: data['signature'],
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]
            });

            wx.ready(function () {
                readyCallback(that);
            });

            wx.error(function (res) {

            });
        };

        $.getJSON('http://app.appgame.com/api/weixin/ticket.php?r=' + Math.random() + '&url=' +
            encodeURIComponent(document.location.href) +
            '&callback=?',
            function (data) {
                if (data) {
                    config_init(data);
                }
            }
        );
    };

    /**
     * 分享到微信朋友圈，使用官方API，为兼容以前的写法，保留方法
     * @param       {Object}    data       待分享的信息
     * 兼容以前的WeixinApi
     */
    WeixinApi.shareToTimeline = function (data) {
        wx.onMenuShareTimeline(data);
    };

    /**
     * 发送给微信上的好友，使用官方API，为兼容以前的写法，保留方法
     * @param       {Object}    data       待分享的信息
     */
    WeixinApi.shareToFriend = function (data) {
        wx.onMenuShareAppMessage(data);
    };

    /**
     * 分享到腾讯微博，使用官方API，为兼容以前的写法，保留方法
     * @param       {Object}    data       待分享的信息
     */
    WeixinApi.shareToWeibo = function (data) {
        wx.onMenuShareWeibo(data);
    };

    /**
     * 新的分享接口，使用官方API，为兼容以前的写法，保留方法
     * @param       {Object}    data       待分享的信息
     */
    WeixinApi.generalShare = function (data) {

    };

    /**
     * 当页面加载完毕后执行，使用方法：
     * WeixinApi.ready(function(Api){
     *    
     * });
     * @param readyCallback
     */
    WeixinApi.ready = function (readyCallback) {
        define_init(readyCallback, this);
    };

    /**
     * 判断当前网页是否在微信内置浏览器中打开
     */
    WeixinApi.openInWeixin = function () {
        return /MicroMessenger/i.test(navigator.userAgent);
    };
})(window);