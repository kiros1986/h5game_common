function is_weixn(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}

function is_ios(){
	return navigator.userAgent.match(/iphone|ipod|ios|ipad/i);
}

var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");
var GameFrame = document.getElementById('game_window');
var islandScapeGame = true;  //是否是横屏游戏


function iframeTransform(){
	console.log("iframeTransform---->");
	setTimeout(function(){
		var translateNum = (window.innerHeight-window.innerWidth)/2;
		GameFrame.style.width = window.innerHeight +'px';
		GameFrame.style.height = window.innerWidth +'px';
		GameFrame.style.transform = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
		GameFrame.style.webkitTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
		GameFrame.style.mozTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
		GameFrame.style.msTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";
		GameFrame.style.oTransform  = "rotate(90deg) translate("+translateNum+"px,"+translateNum+"px)";

	},100)
}

function iframeRecover(){
	console.log("iframeRecover---->");
	setTimeout(function(){
		GameFrame.style.top = 0;
		GameFrame.style.transform = "none";
		GameFrame.style.webkitTransform  = "none";
		GameFrame.style.mozTransform  = "none";
		GameFrame.style.msTransform  = "none";
		GameFrame.style.oTransform  = "none";
		GameFrame.style.width = window.innerWidth +'px';
		GameFrame.style.height = window.innerHeight +'px';
	},100);
}

updateOrientationA = function(){
	var orientation = window.orientation;
	console.log("updateOrientationA---->"+orientation);

	switch (orientation) {
		case 90:

		case -90:
			iframeRecover();
			break;
		default:
			iframeTransform();
	}
};

updateOrientationB = function(){
	alert("updateOrientationB---->");
	var orientation = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
	orientation == "portrait" && islandScapeGame ? ( iframeRecover(),iframeTransform() ) : iframeRecover();
};

var init = function() {
	if(supportOrientation && !is_weixn() || is_ios()){
		updateOrientationA();
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", updateOrientationA , false);
	}else{
		updateOrientationB();
		window.addEventListener("resize", updateOrientationB , false);
	}
};
window.addEventListener("DOMContentLoaded", init, false);