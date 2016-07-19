//倒计时
$(function () {
	var d, h, m, s = 0;
    var time = document.getElementById('time');
    var endTime = new Date('2015/12/19 14:00:00'); //目标
    setInterval(function(){
        var nowTime = new Date();  //新时间
        var stime = parseInt(endTime.valueOf() - nowTime.valueOf()) / 1000;
        d = parseInt(stime / 3600 /24); // 计算天数
      h = parseInt(stime /60 / 60 %24) // 计算小时
        m = parseInt(stime /60 % 60 ); // 计算分数
        s = parseInt(stime % 60);
        h = timeC(h);
        m = timeC(m);
        s = timeC(s);
         h=parseInt(h)+parseInt(d*24);
        /* if (endTime<nowTime) {
        	h=0;
        	s=0;
        	m=0;
        }*/
     
        	        time.innerHTML =h + '：' +m+'：'+s ;

    },1000);
})
function timeC(i){
    i = i<10 ? '0' + i : i;
    return i;
}


  //二维码弹出层
$(function () {
	$(".mimg").mouseover(function () {
		$(".mimgHover").show();
	})
		$(".mimg").mouseleave(function () {
		$(".mimgHover").hide();
	})
})