$(document).ready(function() { (function() {
        var _bdhmProtocol = (("https:" == document.location.protocol) ? "https://": "http://");
        var src = _bdhmProtocol + "hm.baidu.com/h.js?38ac5f6af2266ad6aa28db4c8984eb29";
        var div = document.createElement("div");
        div.style.display = 'none';
        var script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        div.appendChild(script);
        script = null;
        document.body.appendChild(div);
        div = null
    })()
});
function dialog(str) {
    $('head').append('<style>.dialog,.dialog__overlay{top:0;left:0;width:100%;height:100%}.dialog{position:fixed;z-index:10000;display:-webkit-box;display:box;font-size:12px;-webkit-box-align:center;box-align:center;-webkit-box-pack:center;box-pack:center;pointer-events:none}.dialog button{padding:.5em 2em;outline:0;border:none;background:#c94e50;color:#fff;font-weight:600;font-size:1.2em}.dialog__overlay{position:absolute;z-index:1;background:rgba(55,58,71,.9);opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-backface-visibility:hidden}.dialog--open .dialog__overlay{opacity:1;pointer-events:auto}.dialog__content{position:relative;z-index:5;padding:1em;max-width:80%;min-width:50%;background:#fff;text-align:center;opacity:0}.dialog--open .dialog__content{pointer-events:auto}.dialog h2{margin:0;margin:0;padding:0 0 1em;color:#c94e50;text-align:left;font-weight:400;font-size:1.2em;line-height:1.5em}.dialog--open .dialog__overlay{-webkit-transition-duration:.8s;transition-duration:.8s}.dialog--close .dialog__overlay{-webkit-transition-duration:.5s;transition-duration:.5s}.dialog__content{padding:0;background:0 0}.dialog.dialog--open .dialog__content{opacity:1}.morph-shape{position:absolute;top:-2px;left:-2px;z-index:-1;width:calc(100% + 4px);height:calc(100% + 4px)}.morph-shape svg rect{stroke:#fff;stroke-width:2px;stroke-dasharray:1680}.dialog--open .morph-shape svg rect{-webkit-animation:anim-dash .6s forwards;animation:anim-dash .6s forwards}.dialog-inner{background:#fff;opacity:0;-webkit-backface-visibility:hidden}.dialog--open .dialog-inner{padding:1em 2em;opacity:1;-webkit-transition:opacity .85s .35s;transition:opacity .85s .35s}.dialog.dialog--open h2{-webkit-animation:anim-elem-1 .7s ease-out both;animation:anim-elem-1 .7s ease-out both}.dialog.dialog--open button{-webkit-animation:anim-elem-2 .7s ease-out both;animation:anim-elem-2 .7s ease-out both}@keyframes anim-dash{0%{stroke-dashoffset:1680}100%{stroke-dashoffset:0}}@-webkit-keyframes anim-dash{0%{stroke-dashoffset:1680}100%{stroke-dashoffset:0}}@-webkit-keyframes anim-elem-1{0%{opacity:0;-webkit-transform:translate3d(-150px,0,0)}100%{opacity:1;-webkit-transform:translate3d(0,0,0)}}@keyframes anim-elem-1{0%{opacity:0;-webkit-transform:translate3d(-150px,0,0);transform:translate3d(-150px,0,0)}100%{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes anim-elem-2{0%{opacity:0;-webkit-transform:translate3d(150px,0,0)}100%{opacity:1;-webkit-transform:translate3d(0,0,0)}}@keyframes anim-elem-2{0%{opacity:0;-webkit-transform:translate3d(150px,0,0);transform:translate3d(150px,0,0)}100%{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@media screen and (orientation:landscape){.dialog__content{max-width:60%;min-width:30%}}@media screen and (orientation:landscape) and (min-width:800px){.dialog{font-size:24}}@media screen and (orientation:portrait) and (min-width:400px){.dialog{font-size:24}}</style>');
    $("body").append('<div id="somedialog" class="dialog"><div class="dialog__overlay"></div><div class="dialog__content"><div class="morph-shape"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="none"><rect x="3" y="3" fill="none" width="556" height="276"/></svg></div><div class="dialog-inner"><h2></h2><div><button class="action" data-dialog-close>关&nbsp&nbsp&nbsp&nbsp闭</button></div></div></div>');
    $("#somedialog .action").click(function() {
        $('#somedialog').removeClass('dialog--open')
    });
    dialog = function(str) {
        $('#somedialog h2').html(str);
        $('#somedialog').addClass('dialog--open')
    };
    setTimeout(function() {
        dialog(str)
    },
    100)
};
var h5GameRootIndex = 'http://h5.static.myappgame.com/';
var h5HomePageUrl = 'http://h5.static.myappgame.com/';
var h5MoreGameUrl = 'http://h5.appgame.com/';
var h5MoreGameUrlApp = 'appgame://moregame';
var h5WxData = {
    imgUrl: "",
    link: window.location.href,
    desc: document.title,
    title: document.title,
    score: 0,
    increase: false
};
var h5GuanZhu = function() {
    window.location.href = "http://mp.weixin.qq.com/s?__biz=MzA4NjQ2Njk4Nw==&mid=401245069&idx=1&sn=012e505a3ace783a65d0737f39ca8ded#rd";
};
var h5MoreGames = function() {
    if (typeof window.WebViewJavascriptBridge != "undefined") {
        document.location.href = h5MoreGameUrlApp
    } else {
        document.location.href = h5MoreGameUrl
    }
};
var h5AfterGameOver = function() {
    if (typeof window.WebViewJavascriptBridge != "undefined") {
        window.WebViewJavascriptBridge.appGameResult(JSON.stringify({
            img_url: h5WxData.imgUrl,
            img_width: 120,
            img_height: 120,
            link: h5WxData.link,
            desc: h5WxData.title,
            title: h5WxData.desc,
            score: h5WxData.score,
            increase: h5WxData.increase
        }))
    }
};
WeixinApi.ready(function(Api) {
    var timer;
    timer = setInterval(function() {
        if ( !! wx && !!h5WxData && !!h5WxData.imgUrl && h5WxData.imgUrl.split(" ").join("") != "") {
            Api.shareToFriend(h5WxData);
            Api.shareToTimeline(h5WxData);
            Api.shareToWeibo(h5WxData);
            Api.shareToQQ(h5WxData);
            clearInterval(timer)
        }
    },
    10)
});


