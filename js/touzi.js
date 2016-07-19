$(function() {
	$(".investSta a").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".ulType li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(".tableBox .conTable").eq($(this).index()).show().siblings().hide();
	})
	/*交易明细切换*/
	$(".transUl li").click(function() {
		$(this).addClass("active").siblings().removeClass();
		
		$(".outstandBox .investBox").eq($(this).index()).show().siblings().hide();
	})
	/*日期选择*/
	$(".dateTime .qishi").focus(function(event) {
			$(this).addClass("current2");
		}).blur(function(event) {
			$(this).removeClass("current2");
		});

})
/*回款日历-当前有回款日期的*/
/*		window.onload=function () {
	$(".timeline_top ul li div").addClass("radioCurrent");
}*/