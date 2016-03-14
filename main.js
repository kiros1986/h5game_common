

var titleOK=false,loadOK=false;
var myqz;
var qzIndex=1;
var mySwiper;
// 微信分享
var h5WxData={};
var dzm;
var volume=1;
var damDuration=[1600,3000,1000,1400,3000,3100];
// 微信分享设置
    var lct = document.location;
    var path = lct.pathname;
    var pathName = path.substring(0, path.lastIndexOf("/"));
    var basePath = lct.protocol + "//" + lct.host + pathName + "/";
    var iconUrl = basePath + "images/shareIcon.jpg";
    h5WxData = h5WxData || {};
    h5WxData.imgUrl = iconUrl; //待分享icon图片链接
    h5WxData.link = basePath; //待分享链接
    h5WxData.desc = " "; //待分享文字描述
    h5WxData.title = "此次全民突击的任务十分危险，神秘礼包物资在向你招手，你还在等什么？"; //待分享标题



var SHAKE_THRESHOLD = 1000;
var last_update = 0;
var shakeCount = 0;
var x = y = z = last_x = last_y = last_z = 0;

function deviceMotionHandler(eventData) {
  var acceleration = eventData.accelerationIncludingGravity;
  var curTime = new Date().getTime();
  if ((curTime - last_update) > 100) {
    var diffTime = curTime - last_update;
    last_update = curTime;
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

    if (speed > SHAKE_THRESHOLD) {
      shakeCount++
      if (shakeCount > 2) {
        yao();
        window.removeEventListener('devicemotion', deviceMotionHandler, false);
      }
    };
    last_x = x;
    last_y = y;
    last_z = z;
  }
}


var dazisrc=basePath+'music/dz.mp3';
// if(bIsAndroid){
// dazisrc=basePath+'music/dzA.mp3'
// }

    var prmanifest = [ 
        {src:'images/loading-bg.jpg'}, 
        {src:'images/loading-bg2.jpg'}, 
        {src:dazisrc,id:'dz'},
    ]

    prloader = new createjs.LoadQueue(false);
    prloader.installPlugin(createjs.Sound);
    prloader.on('complete' ,prloaderComplete);
    prloader.loadManifest(prmanifest);
    function prloaderComplete(event){
      $('.view').show();
      $('.view').tap(function(){
          dzm.stop();
      });
      showPreloadTitle()
      createjs.Sound.alternateExtensions = ["mp3"];
      loader.loadManifest(manifest);
      playDzm("dz");
        setTimeout(function(){
            dzm.stop();
            createjs.Sound.stop();
        },damDuration[0])
     }

    var manifest = [ 
        {src:'images/bg1.jpg'}, 
        {src:'images/bg1-2.jpg'}, 
        {src:'images/sp1.png'},
        {src:'images/qzBg.jpg',id:'qzBg'},
        {src:'images/lh1.png',id:'lh1'},
        {src:'images/lh2.png',id:'lh2'},
        {src:'images/lh3.png',id:'lh3'},
        {src:'images/lh4.png',id:'lh4'},
        {src:'images/qh.jpg',id:'qh'},
        {src:'images/qh4.png',id:'qh4'},
        {src:'images/bg2.jpg',id:'bg2'},
        {src:basePath+'music/xh.mp3',id:'xh'},
        {src:basePath+'music/q1.mp3',id:'q1'},
        {src:basePath+'music/q2.mp3',id:'q2'},
        {src:basePath+'music/q3.mp3',id:'q3'},
        {src:basePath+'music/q4.mp3',id:'q4'},
        {src:basePath+'music/yao.mp3',id:'yao'},
        {src:basePath+'music/bgm.mp3',id:'bgm'},
    ]

    loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
    loader.on('complete' ,loaderComplete);
    loader.on('progress' ,loaderProgress);

    function loaderProgress(event){
      $('#preload-progress').text(Math.floor(event.progress*100)+'%');
    }

       function loaderComplete(event){
        $('#preload-progress').text('100%');
        loadOK=true;
       // initSwiper();
       init();
        createjs.Sound.alternateExtensions = ["mp3"];
        // createjs.Sound.registerSound(loader.getResult('xh'), "xh");   
        // createjs.Sound.registerSound(basePath+"music/"+r+'.mp3', "call");
        // createjs.Sound.registerSound(basePath+"music/bg.mp3", "bg");
       myqz=new QZ();
        
     }

    function playSound(m,loop)
    {
       if(!volume) return;
        var instance = createjs.Sound.play(m,{"loop":loop});
        instance.volume = volume;

    }

var bgm;
    function playBgm(m){
        bgm = createjs.Sound.play(m,{"loop":1000});
        bgm.volume = volume;
    }


    function playDzm(m){
        dzm = createjs.Sound.play(m,{"loop":false});
        dzm.volume = volume *0.6;
    }
    
    // function handleLoadComplete(event) {
    //       playSound('l',"true")
    // }


    function stopSound(){
        createjs.Sound.stop();

    }




function gotobx(i){
    var roleText=['机枪队','突击队','阻击队',]
    h5WxData.title='作为'+ roleText[i] +'的一员，此次全民突击的任务中，我获得了神秘大礼包！'
    h5WxData.imgUrl = basePath + "images/shareIcon"+ (parseInt(i)+1) +".jpg"; 
    mySwiper.slideTo(4,500);
    $('#page4 .t1').addClass('s'+i)
    setTimeout(function(){
       mySwiper.lockSwipes();
    },600)
    
}


function setData(){
    var myDate=new Date();
    var weekT=['日','一','二','三','四','五','六'];
    $('.p1 .date').html((myDate.getMonth()+1)+  "月"+myDate.getDate()+'日&nbsp;星期'+weekT[myDate.getDay()] ); 
    var h=myDate.getHours();
    var m=myDate.getMinutes();
    // if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    $('.p1 .time').html(h+':'+m); 
}


//重设alert
function alert(str){
     $("body").append('<div id="alert"></div>');
      alert=function(str){
         $('#alert').text(str).addClass('show')
         setTimeout(function(){ $('#alert').removeClass('show'); },2500)
      }
      alert(str);
}
  



  
   //添加背景音乐插件
   // var bgm = new Bgmusic({
   //    musicSrc:'music/bgm.mp3',
   //    musicBtnId:'musicPlayer'
   // });
   

function showWxMsg(){
   $('.p1').addClass('out');
   playSound("xh");
   setTimeout(function(){
    $('.p1').removeClass('show');
    $('.p2').addClass('show');
    
    setTimeout(function(){
      playBgm('bgm')
      setTimeout(function(){
        $('#startBtn').removeClass('hide');
      },2000)
      
      showq(1);
      myqz.init();
    },500)
   },500)
}


var qIndex=1;
function showq(index){
    playDzm("dz");
    setTimeout(function(){
      dzm.stop();
    },damDuration[index])
    $("#ticker"+index).show().ticker({  
           cursorList:  "|",
           rate:        60,
           delay:       0
      }).trigger("play").trigger("stop");
      setTimeout(function(){
        if(index>1)  $('#yao').addClass('show');
            $('#q').addClass('show').css('background-position','0 -'+(index-1)*300 +'px');
            shakeCount=0;
            window.addEventListener('devicemotion', deviceMotionHandler,false); 
            if( index==1){
                $('.qz.q'+index).addClass('show'); 
            }else{
               // $('.qz.q'+(index-1) ).addClass('show'); 
               // $('#startBtn').removeClass('hide')
            }
           
      },damDuration[index  ])
      qzIndex=index;
}




function hideq(index){
    $('#q').removeClass(); 
    $("#ticker"+index).hide();
    
    // $('.qz.q'+(index-1) ).removeClass('show'); 
    $('#startBtn').addClass('hide');
    setTimeout(function(){
        $('.qz.q'+index).removeClass('show'); 
    },200)
    if(index==1){

      
        setTimeout(function(){
         eval("myqz.a"+ index +"()")
        },500);
    }else{
    setTimeout(function(){
      eval("myqz.a"+ index +"()")
    },1000)      
    }  
}

// function hq(index){
//    // $('.qz.q'+(index-1) ).removeClass('show'); 
//    console('hq')
//    $('#yao').removeClass('show');
//    setTimeout(function(){
        
//        $('.qz.q'+(index) ).addClass('show');    
//    },500);
      
// }


function countTime(callback){
    var that=this;
    that.start=function(){
     that.startTime = new Date().getTime(); 
     that.count = 0;
     addTime();
     $('#gameTime').show();
    };
    that.addTime=function(){
       that.count++; 
       callback();
        var offset = new Date().getTime() - (that.startTime + that.count * 1000); 
        var nextTime = 1000 - offset; 
        if (nextTime < 0) nextTime = 0; 
        that.t=setTimeout(addTime, nextTime); 
  
    };
    that.end=function(){
        clearTimeout(that.t);
    };
    return that;
}

function showPreloadTitle(){
  $('#preload .t1').addClass('show')
  setTimeout(function(){
      $('#preload .t2').addClass('show')
      setTimeout(function(){
         titleOK=true;
         init();
      },2000)  
  },1000)
}


function init(){
   if(titleOK&&loadOK ){
        $('.p1').addClass('show');
        $("#preload").removeClass('show');
   }

}

function yao(){
    // hideq(qzIndex);
    playSound('yao');
    $('#startBtn').removeClass('hide');
    $('#yao').removeClass('show');
    $("#ticker"+qIndex).hide();
    // $('.qz.q'+(qIndex-1) ).removeClass('show'); 
    setTimeout(function(){
        $('.qz.q'+(qIndex) ).addClass('show');     
    },500)

}

function initSwiper(){
  console.log('init')
  $('.p3').removeClass('unLoad');
    mySwiper = new Swiper ('.p3', {
    direction: 'vertical',
    longSwipesRatio : 0.3,
    onInit: function(swiper){ 
         swiperAnimateCache(swiper); //隐藏动画元素 
         swiperAnimate(swiper); //初始化完成开始动画
    }, 
    onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        var $title=$(swiper.slides[swiper.activeIndex]).find('.title');
        $(swiper.slides[swiper.activeIndex]).addClass('animation').siblings().removeClass('animation');

        setTimeout(function(){
             $title.addClass('yao').removeClass('bounceInLeft').removeClass('bounceInRight').css('-webkit-animation-delay','0').css('-webkit-animation-duration','0.5s');
            setTimeout(function(){
              $title.removeClass('yao');
            },300)
            if( swiper.activeIndex==1){ 
            playSound('q3')
            }else if( swiper.activeIndex==2){
           playSound('q1')
            }else if( swiper.activeIndex==3){
              playSound('q2')
            }
        },1800)

    } 
  }) 
}

function gotoPart2(){
    $('.p2').removeClass('show');
    $('.p3').addClass('show').removeClass('unLoad');
    setTimeout(function(){
      var $title=$(mySwiper.slides[mySwiper.activeIndex]).find('.title')
      $(mySwiper.slides[mySwiper.activeIndex]).addClass('animation');
      // setTimeout(function(){
      //              $title.addClass('yao').removeClass('bounceInLeft').removeClass('bounceInRight').css('-webkit-animation-delay','0').css('-webkit-animation-duration','0.5s');
      //       setTimeout(function(){
      //         $title.removeClass('yao');
      //       },300)
      //  playSound('q3'); 
      //  },1800)     
    },500)
    var bgmanifest = [ 
        {src:basePath+'music/bgm2.mp3',id:'bgm2'},
    ]

    var bgloader = new createjs.LoadQueue(false);
    bgloader.installPlugin(createjs.Sound);
    bgloader.on('complete' ,bgloaderComplete);
    bgloader.loadManifest(bgmanifest);
    function bgloaderComplete(){
       console.log('1000')
        bgm.stop();
        playBgm('bgm2')
    }    


}


// AV.initialize('k2wBCqDulLYbOTscqQ9L7cR4', 'zQAhFjEVQ95hEBK4cpQKYNxa');
// var Post = AV.Object.extend("xm201509");
// var post = new Post();   
// var query = new AV.Query(Post);
// // post.set("tudi6", 1000);
// // post.save();
//     query.get('5604f2e360b20d2d6690e507', {
//       success: function(post) {
//         // 成功，回调中可以取得这个 Post 对象的一个实例，然后就可以修改它了
//         var tudi = parseInt(post.get("tudi6"))
//         console.log(tudi)

//         post.increment("tudi6", 3);
//         $('.count').text(tudi)
//         post.save();
//       },
//       error: function(object, error) {
//         console.log(object);
//       }
//     });

  
$(document).ready(function(){
    setData();
  
// initSwiper();

    //阻止页面冒泡
    $('body').bind('touchmove',function(e){
      e.preventDefault();
      e.stopPropagation();
    })

    $('.view>.page').bind('webkitTransitionEnd',function(){
      if(!$(this).hasClass('show')){
        $(this).addClass('unLoad');
      };
    }) 

    $('.qz').bind('webkitTransitionEnd',function(){
      if(!$(this).hasClass('show')){
        $(this).remove();
      };
    }) 

$('.hh').bind('webkitAnimationEnd',function(){ $(this).removeClass('f')})

//打开页面
   var touch={};
   $('.wx_start').bind('touchstart',function(e){
        touch.startLeft=e.originalEvent.targetTouches[0].pageX;
        e.preventDefault();
        e.stopPropagation();
    }).bind('touchmove',function(e){
        touch.Left=e.originalEvent.targetTouches[0].pageX-touch.startLeft;
       $(this).css('-webkit-transform','translate3d('+ touch.Left +'px,0,0)').css('-webkit-transition','-webkit-transform 0s')
        e.preventDefault();
        e.stopPropagation();
    }).bind('touchend',function(e){
        if(touch.Left>20){
          $(this).css('-webkit-transform','translate3d('+ 640 +'px,0,0)').css('-webkit-transition','-webkit-transform 0.5s');
          setTimeout(function(){
             $('.wx_start').remove();
          },500)
          showWxMsg()
        }else{
          $(this).css('-webkit-transform','translate3d('+ 0 +'px,0,0)').css('-webkit-transition','-webkit-transform 0.5s');
        }
    })

  $('#startBtn').tap(function(){
      hideq(qIndex);
      qIndex++;
  })


  $('#yao').tap(function(){
      yao();
  })

  $('.getBtn').tap(function(){
       $('.p4').addClass('show').removeClass("unLoad");
  })

  $('.p4').swipeDown(function(){
    $(this).removeClass('show')
  })
$('.chosebtn').tap(function(){
    var i = $(this).data('index');
    console.log(i)
    gotobx(i) ;

})

  $('#musicPlayer').tap(function(){
      if($(this).hasClass('pause')){
         $(this).removeClass('pause');
         volume=1;  
         bgm.setVolume(1) ;
      }else{
        $(this).addClass('pause');
        volume=0;
        bgm.setVolume(0) ;
      }
  })
})







  
