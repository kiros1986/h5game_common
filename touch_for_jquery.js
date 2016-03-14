//兼容touch事件

var jq_touch={};
  function parentIfText(node){
    return 'tagName' in node ? node : node.parentNode;
  }
  //判断平台
  function checkStation(){
    jq_touch.hastouch = ('ontouchstart' in window),
    jq_touch.START_EVENT = jq_touch.hastouch ? 'touchstart' : 'mousedown',
    jq_touch.MOVE_EVENT = jq_touch.hastouch ? 'touchmove' : 'mousemove',
    jq_touch.END_EVENT = jq_touch.hastouch ? 'touchend' : 'mouseup';
  }
$(document).ready(function(){
    checkStation();
    $(document.body).bind(jq_touch.START_EVENT, function(e){
      if(jq_touch.hastouch){
        jq_touch.target = parentIfText(e.originalEvent.targetTouches[0].target);
      }else{
        jq_touch.target = parentIfText(e.target);  
        $(jq_touch.target).trigger('touchstart');
      }

      jq_touch.according=false;
      jq_touch.swipe=false;
      if(jq_touch.hastouch){
        jq_touch.x1 = e.originalEvent.targetTouches[0].pageX;
        jq_touch.y1 = e.originalEvent.targetTouches[0].pageY;
      }
      else{     
        jq_touch.x1 = e.pageX;
        jq_touch.y1 = e.pageY;
      }
    }).bind(jq_touch.MOVE_EVENT, function(e){
      if(true===jq_touch.swipe) {
        return;
      }
      jq_touch.swipe=true;
      if(jq_touch.hastouch){
        jq_touch.x2 = e.originalEvent.targetTouches[0].pageX;
        jq_touch.y2 = e.originalEvent.targetTouches[0].pageY;
      }
      else{

        jq_touch.x2 = e.pageX;
        jq_touch.y2 = e.pageY;
      }
      jq_touch.deltaX = jq_touch.x2 - jq_touch.x1,
      jq_touch.deltaY = jq_touch.y2 - jq_touch.y1;

      function swipeDirection(x1, x2, y1, y2){
        var xDelta = Math.abs(x1 - x2), yDelta = Math.abs(y1 - y2)
        return xDelta >= yDelta ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
      }
      var _sSwipeDirection = 'swipe' + swipeDirection(jq_touch.x1, jq_touch.x2, jq_touch.y1, jq_touch.y2);
    
      $(jq_touch.target).trigger(_sSwipeDirection);
  }).bind(jq_touch.END_EVENT, function(e){
      if(jq_touch.hastouch){
      }else{
        $(jq_touch.target).trigger('touchend');
      };
    if(!jq_touch.swipe){
        $(jq_touch.target).trigger('tap');
    };
    jq_touch.according=false;
    jq_touch.swipe=false;
}).bind('touchcancel', function(){ touch={} });
});
['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })