var AD_LINK = "http://h5.appgame.com/";
var AD_TIME = 3;

var showAdvertise = function() {
    var a = document.createElement("a");
    a.id = "ad-img-a";
    a.style.cssText = "position: absolute;z-index: 99999;top:0; left:0; width: 100%;height: 100%;background: #fff url(http://h5.static.myappgame.com/common/ad.png) no-repeat center;background-size: 100%;";
    a.setAttribute("href", AD_LINK),
    document.body.appendChild(a);
    var fontSize = 24 * Math.min($(window).width(),$(window).height()) / 640 + "px";
    var div = document.createElement("div");
    div.id = "ad-txt-div";
    div.style.cssText = "position:absolute; top:75%; margin-top:-15px;width:100%;text-align:center;line-height:30px;color:#333;font-size:" + fontSize;
    div.innerHTML = "游戏马上开始";
    a.appendChild(div);
    var handler = null;
    var update = function() {
        AD_TIME -= 1;
        var a = document.getElementById("ad-txt-div");
        a.innerHTML = '玩命加载中,还有<span style="color:#f00">' + AD_TIME + "</span>秒";
        if (AD_TIME <= 0) {
            document.body.removeChild(document.getElementById("ad-img-a"));
            clearInterval(handler)
        }
    };
    window.addEventListener("load", 
    function() {
        var a = document.getElementById("ad-txt-div");
        a.innerHTML = '玩命加载中,还有<span style="color:#f00">' + AD_TIME + "</span>秒";
        handler = setInterval(update, 1000)
    })
};
showAdvertise();

