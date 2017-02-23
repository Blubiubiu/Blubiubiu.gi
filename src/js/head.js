/*

 name : Blubiubiu.github.io
 author :  Blubiubiu
 date : 2017-02-22

*/
//获得header
var oHeader = document.getElementsByTagName('header')[0];
	
//headroom
function wheel(event) {
	event = event || window.event;
	var delta = 0;
	if (event.wheelDelta) {
		//取值±120
        //delta = event.wheelDelta/120;
        delta = event.wheelDelta; 
        if (window.opera) {
        	delta = -delta;
        }
    } else if (event.detail) {
    	//ff 使用detail,取值±3
        //delta = -event.detail/3;
        delta = -event.detail;
    }
    //滚轮向上>0  向下<0 且在小于200高度时禁止触发
    if(delta > 0){
    	oHeader.className = 'header-up'
    }else if(delta < 0 && document.body.scrollTop >= 200){
    	oHeader.className = 'header-down';
    }

};

//ff & chrome 绑定
if (window.addEventListener){
	window.addEventListener('DOMMouseScroll', wheel, false);
}
//ie绑定
window.onmousewheel = document.onmousewheel = wheel;
