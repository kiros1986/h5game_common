var publicResourceLoader=null;!function(){function a(a){this.css=a.css,this.scripts=a.scripts,this.head=document.getElementsByTagName("head")[0],this.loadCSS(),this.loadScript()}var b,c,d;a.prototype={construct:a,loadCSS:function(){this.css.forEach(function(a){document.write(' <link href="'+a+'" rel="stylesheet" />')})},loadScript:function(){this.scripts.forEach(function(a){document.write('<script type="text/javascript" src="'+a+'"></script>')})}},b=window.h5IsDebugger,c="?v="+Math.random(),d=function(){return void 0===b||null===b||b?c:""},publicResourceLoader=new a({css:[],scripts:["http://h5.static.myappgame.com/common/jquery.js","http://h5.static.myappgame.com/common/WeixinApi.js","http://h5.static.myappgame.com/common/common.min.js"]})}();
