$(function () {
    //隐藏余额和积分（首页）
    $('#eOpen').click(function(){
        $(this).hide();
        $('#eClose').show();
        $('#money').html('****').addClass('star');
        $('#score').html('****').addClass('star');
    });
    $('#eClose').click(function(){
        $(this).hide();
        $('#eOpen').show();
        $('#money').html('<b>¥</b>15,000,000').removeClass('star');
        $('#score').html('1534').removeClass('star');
    });


    //二维码弹出层
    $('#code').click(function(){
        $('.maskLayer').show();
        $('.codeLayer').fadeIn();
    });
    $('#close').click(function(){
        codeLayerHide();
    });
    $('#mask').click(function(){
        codeLayerHide();
    });
    function codeLayerHide(){
        $('.maskLayer').hide();
        $('.codeLayer').hide();
    }


    //右侧悬浮自适应
    sideBar();
    $(window).resize(function(){
        sideBar();
    });
    function sideBar(){
        var w = document.documentElement.clientWidth;
        if(w < 1332){
            $('.sideBar').removeClass('sideBar_1').addClass('sideBar_2');
        }
        else{
            $('.sideBar').removeClass('sideBar_2').addClass('sideBar_1');
        }
    }


    //回到顶部
    goTopEx();
    function goTopEx() {
        var obj = document.getElementById("goTopBtn");
        function getScrollTop() {
            return document.documentElement.scrollTop + document.body.scrollTop;
        }
        function setScrollTop(value) {
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop = value;
            } else {
                document.body.scrollTop = value;
            }
        }
        showTop();
        window.onscroll = showTop;
        function showTop(){
            getScrollTop() > 0 ? obj.style.display = "": obj.style.display = "none";
        }

        obj.onclick = function() {
            var goTop = setInterval(scrollMove, 10);
            function scrollMove() {
                setScrollTop(getScrollTop() / 1.1);
                if (getScrollTop() < 1) clearInterval(goTop);
            }
        }
    }

    //即将过期提示（我的账户）
    $(window).load(function(){
        $('.myScore .tipBox').addClass('fadeIn');
    });

    //问号图标提示（我的账户）
    $('i.what').hover(function(){
        $(this).next().show();
    },function(){
        $(this).next().hide();
    });

    //左侧菜单（我的账户）
    $('.accountMenu>p').click(function(){
        $(this).next().slideToggle();
    });
});