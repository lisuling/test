
$(function(){
	//排序
	$('.content_wu .paixu').click(function(){
		$(this).toggleClass('sort');
	})
	
	//期限选择
	$('.list_wu dl dd').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})