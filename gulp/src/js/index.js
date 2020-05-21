function initActive () {
    $('input:radio').each(function () {
        if ($(this).attr('checked') == 'checked'){
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    $('input:checkbox').each(function () {
        if ($(this).attr('checked') == 'checked'){
            $(this).prev().addClass('check-active').parent().addClass('active');
        } else {
            $(this).prev().removeClass('check-active').parent().removeClass('active');
        }
    });
}

$(function () {
    $('.bylHandle a').mouseenter(function () {
        $(this).addClass('hover');
        $('.bylBox ul').eq($(this).index()-1).show();
    }).mouseleave(function () {
        $(this).removeClass('hover');
        $('.bylBox ul').eq($(this).index()-1).hide();
    });

    $('.bylBox ul').mouseenter(function () {
        $(this).show();
        $('.bylHandle a').eq($(this).index()).addClass('hover');
    }).mouseleave(function () {
        $(this).hide();
        $('.bylHandle a').eq($(this).index()).removeClass('hover');
    });

    initActive();

    $('label input').click(function () {
        var that = $(this);
        if(that.attr('type') == 'radio') {
            $('input:radio').each(function () {
                if($(this).attr('name') == that.attr('name')){
                    $(this).removeAttr('checked');
                }
            });
            that.attr('checked','checked');
        } else {
            if (that.val() == 'all') {
                that.attr('checked','checked').parents('li').siblings().find('input').removeAttr('checked');
            } else {
                if (that.attr('checked') == 'checked') {
                    that.removeAttr('checked');
                } else  {
                    that.attr('checked','checked');
                    that.parents('li').siblings().eq(0).find('input').removeAttr('checked');
                }
            }
        }
        initActive();
    });

    $('.selectMore').click(function () {
        if($('.selectBox').hasClass('selectClose')){
            $(this).addClass('active');
            $('.selectBox').removeClass('selectClose');
            $('.selectX .selectMore span').html('收起筛选项（酒店品牌/参团方式/线路特色/菜肴菜系）<i></i>');
        } else {
            $(this).removeClass('active');
            $('.selectBox').addClass('selectClose');
            $('.selectX .selectMore span').html('更多筛选项（酒店品牌/参团方式/线路特色/菜肴菜系）<i></i>');
        }
    });


    $('.sel-tab span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(".sel-list-show").niceScroll({
        cursorcolor: "#03bbd4",
        autohidemode: "false",
        cursorwidth: "9px",
        background: "#ededed"
    });

    $('.big-map').click(function(){
        $('.enlarge-shadow').show();
        $('.wraper').addClass('blur');
    });

    $('.enlarge-map .close-map').click(function(){
        $(this).parent().hide();
        $('.wraper').removeClass('blur');
    });

    $('.select-destio-place li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    }).click(function(){
        $(this).addClass('active').siblings().removeClass('active').parent().hide();
        $(this).parent().prev('input').val($(this).text());
    });

    $('.select-destio-place').mouseleave(function(){
        $(this).hide();
    });

    $('.select-destio-box').find('.shoe-place').click(function(){
        $(this).next().slideToggle();
    });

    $("#datetimepicker").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd D",
        autoclose: true,
        todayBtn: true
    });

    $("#datetimepicker1").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true
    });

    $("#datetimepicker2").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd D",
        autoclose: true,
        todayBtn: true
    });

    $('.product-buy a').click(function () {
        if ($(this).parent().next().hasClass('active'))
            $(this).parent().next().removeClass('active'),
                $(this).removeClass('active');
        else $(this).parent().next().addClass('active'),
            $(this).addClass('active');
    });

    $('.olSelect li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    }).click(function(){
        $(this).addClass('active').siblings().removeClass('active').parent().hide();
        $(this).parent().prev('input').val($(this).text());
    });

    $('.olSelect ul').mouseleave(function(){
        $(this).hide();
    });

    $('.olSelect .olItem:first-child input').click(function(){
        $(this).next().slideToggle();
    });

    function orderListInit() {
        $('.orderList .itema ul').each(function () {
            if($(this).siblings().hasClass('open')){
                $(this).show();
            } else {
                $(this).hide();
            }
            $(this).siblings().children('i').show();
        });
    }

    orderListInit();

    $('.orderList .slide .itema>a').click(function () {
        if($(this).hasClass('closed')){
            $(this).removeClass('closed').addClass('open')
        } else if($(this).hasClass('open')) {
            $(this).removeClass('open').addClass('closed')
        }
        orderListInit();
    });

    $("#datetimepicker3").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true
    });

    $("#datetimepicker4").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true
    });


    $(".osmbicon,.always-use-men a span").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });

    $(".showMask").click(function () {
        $("#mask").css({
            "height": $(document).height(),
            "width": $(document).width()
        }).show().addClass('show');
    });

    //隐藏遮罩层
    $(".hideMask").click(function () {
        $("#mask").hide().removeClass('show');
    });

    $('.mapBox0 .content li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.vid-contain .vid-ran em').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(this).parent().parents('dl').siblings().find('.vid-ran').removeClass('active');
        $(this).parent().parent().find('.vid-bomb-box').find('li').eq($(this).parent().index()).show().siblings().hide();
        $(this).parent().parents('dl').siblings().find('.vid-bomb-box li').hide();
    });

    $('.close-bomb b').click(function(){
        $(this).parent('.close-bomb').parent().slideUp();
        $(this).parent().parent().parent().parent('.vid-contain').find('.vid-ran').eq($(this).parent('.close-bomb').parent().index()).removeClass('active');
        $(this).parent('.close-bomb').parent().slideUp();
        $('.vid-contain .vid-ran').eq($(this).parent('.close-bomb').parent().index()).removeClass('active');
    });

    $(".areaBlock01 a,.areaBlock02 a,.show-hotel a").click(function () {
        if ($(this).prev().hasClass('active')) {
            $(this).prev().removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $(this).prev().addClass('active');
            $(this).addClass('active');
        }
    });

    $('.vid-contain .vid-ran').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.vid-bomb-box li').eq($(this).index()).show().siblings().hide();
    });

    $('.genreNav a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

// 定位导航栏
function detailContentRight(num1, num2) {
    $(window).scroll(function(e){
        var footerTop = $('.user-eva-luate').offset().top;
        var bottom = footerTop - $(".play-day-list").height() - num2;
        if(window.pageYOffset){
            y = window.pageYOffset;
            if (y > num1 && y < bottom){
                $(".play-day-list").css({"position": "fixed", "top": 70});
            }else if(y >= bottom) {
                $(".play-day-list").css({"position": "absolute", "top": bottom + 5});
            }else {
                $(".play-day-list").css({"position": "absolute", "top": 20});
            }
        }
    });
}
function lineDetailDays() {
    $(window).scroll(function(e){
        var everyTop = new Array();
        var everyHeight = new Array();
        var everySpotTop = new Array();
        var everySpotHeight = new Array();
        $(".day-number-cont").each(function(e) {
            var index = $(this).index();
            everyTop[index] = $(this).offset().top;
            everyHeight[index] = $(this).height();

            everySpotTop[index] = new Array();
            everySpotHeight[index] = new Array();
            for (var i = 0; i < $(this).find("h5").length; i++) {
                everySpotTop[index][i] = $(this).find("h5").eq(i).offset().top;
                everySpotHeight[index][i] = $(this).find("h5").eq(i).height() + $(this).find("h5").eq(i).next('contet-show').height()+250;
            }
        });
        if(window.pageYOffset){
            y = window.pageYOffset;
            for (var i = 0; i < everySpotTop.length; i++) {
                for (var j = 0; j < everySpotTop[i].length; j++) {
                    if (y >= everySpotTop[i][j] - 15 && y < everySpotTop[i][j] + everySpotHeight[i][j]){
                        $(".play-day-list li").removeClass("active");
                        $(".play-day-list li").eq(i).addClass("active");
                    }
                }
            }
        }
    });
}

function offsetFun () {
    var gn = $('.genreNav');
    var vh = $(window).height();

    $('.apiao').scrollex({
        top: vh,
        enter: function() {
            gn.css({'position':'fixed','right':0});
        },
        leave: function () {
            gn.css({'position':'absolute','right':'auto'});
        }
    });

    $('.areaBlock').each(function (i) {
        $('.areaBlock').eq(i).scrollex({
            top: vh - 48,
            bottom: 55,
            enter: function() {
                $('.genreNav a').eq(i).addClass('active').siblings().removeClass('active');
            }
        });
    });
}

function lineOffFun() {
    var vh = $(window).height();
    var pdl = $('.play-day-list');
    $('.paly-detail-info h5').each(function (i) {
        $('.paly-detail-info h5').eq(i).scrollex({
            top: vh-50,
            enter: function() {
                pdl.children().eq(i).addClass('active').siblings().removeClass('active');
            }
        });
    });
    $('.paly-detail-info').scrollex({
        top: vh-70,
        bottom: pdl.height()+100,
        enter: function() {
            pdl.css({'position':'fixed','top':90,'bottom':'auto'});
        },
        leave: function () {
            if ($('.play-day-list li:first-child').hasClass('active')){
                pdl.css({'position':'absolute','top':40,'bottom':'auto'});
            }
        }
    });
    $('.paly-detail-info i').scrollex({
        bottom: pdl.height()+100,
        leave: function () {
            if ($('.play-day-list li:last-child').hasClass('active')){
                pdl.css({'position':'absolute','top':'auto','bottom':0});
            }
        }
    });
}
/******************/
function initActive () {
    $('input:radio').each(function () {
        if ($(this).attr('checked') == 'checked'){
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    $('input:checkbox').each(function () {
        if ($(this).attr('checked') == 'checked'){
            $(this).prev().addClass('check-active').parent().addClass('active');
        } else {
            $(this).prev().removeClass('check-active').parent().removeClass('active');
        }
    });
}

$(function () {
    $('.bylHandle a').mouseenter(function () {
        $(this).addClass('hover');
        $('.bylBox ul').eq($(this).index()-1).show();
    }).mouseleave(function () {
        $(this).removeClass('hover');
        $('.bylBox ul').eq($(this).index()-1).hide();
    });

    $('.bylBox ul').mouseenter(function () {
        $(this).show();
        $('.bylHandle a').eq($(this).index()).addClass('hover');
    }).mouseleave(function () {
        $(this).hide();
        $('.bylHandle a').eq($(this).index()).removeClass('hover');
    });

    initActive();

    $('label input').click(function () {
        var that = $(this);
        if(that.attr('type') == 'radio') {
            $('input:radio').each(function () {
                if($(this).attr('name') == that.attr('name')){
                    $(this).removeAttr('checked');
                }
            });
            that.attr('checked','checked');
        } else {
            if (that.val() == 'all') {
                that.attr('checked','checked').parents('li').siblings().find('input').removeAttr('checked');
            } else {
                if (that.attr('checked') == 'checked') {
                    that.removeAttr('checked');
                } else  {
                    that.attr('checked','checked');
                    that.parents('li').siblings().eq(0).find('input').removeAttr('checked');
                }
            }
        }
        initActive();
    });

    $('.selectMore').click(function () {
        if($('.selectBox').hasClass('selectClose')){
            $(this).addClass('active');
            $('.selectBox').removeClass('selectClose');
            $('.selectX .selectMore span').html('收起筛选项（酒店品牌/参团方式/线路特色/菜肴菜系）<i></i>');
        } else {
            $(this).removeClass('active');
            $('.selectBox').addClass('selectClose');
            $('.selectX .selectMore span').html('更多筛选项（酒店品牌/参团方式/线路特色/菜肴菜系）<i></i>');
        }
    });


    $('.sel-tab span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(".sel-list-show").niceScroll({
        cursorcolor: "#03bbd4",
        autohidemode: "false",
        cursorwidth: "9px",
        background: "#ededed"
    });

    $('.big-map').click(function(){
        $('.enlarge-shadow').show();
        $('.wraper').addClass('blur');
    });

    $('.enlarge-map .close-map').click(function(){
        $(this).parent().hide();
        $('.wraper').removeClass('blur');
    });

    $('.select-destio-place li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    }).click(function(){
        $(this).addClass('active').siblings().removeClass('active').parent().hide();
        $(this).parent().prev('input').val($(this).text());
    });

    $('.select-destio-place').mouseleave(function(){
        $(this).hide();
    });

    $('.select-destio-box').find('.shoe-place').click(function(){
        $(this).next().slideToggle();
    });

    $("#datetimepicker").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd D",
        autoclose: true,
        todayBtn: true
    });

    $("#datetimepicker1").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true
    });

    $("#datetimepicker2").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd D",
        autoclose: true,
        todayBtn: true
    });

    $('.product-buy a').click(function () {
        if ($(this).parent().next().hasClass('active'))
            $(this).parent().next().removeClass('active'),
                $(this).removeClass('active');
        else $(this).parent().next().addClass('active'),
            $(this).addClass('active');
    });

    $('.olSelect li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    }).click(function(){
        $(this).addClass('active').siblings().removeClass('active').parent().hide();
        $(this).parent().prev('input').val($(this).text());
    });

    $('.olSelect ul').mouseleave(function(){
        $(this).hide();
    });

    $('.olSelect .olItem:first-child input').click(function(){
        $(this).next().slideToggle();
    });

    function orderListInit() {
        $('.orderList .itema ul').each(function () {
            if($(this).siblings().hasClass('open')){
                $(this).show();
            } else {
                $(this).hide();
            }
            $(this).siblings().children('i').show();
        });
    }

    orderListInit();

    $('.orderList .slide .itema>a').click(function () {
        if($(this).hasClass('closed')){
            $(this).removeClass('closed').addClass('open')
        } else if($(this).hasClass('open')) {
            $(this).removeClass('open').addClass('closed')
        }
        orderListInit();
    });

    $("#datetimepicker3").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true
    });

    $("#datetimepicker4").datetimepicker({
        minView: "month",
        language: 'zh-CN',
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true
    });


    $(".osmbicon,.always-use-men a span").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });

    $(".showMask").click(function () {
        $("#mask").css({
            "height": $(document).height(),
            "width": $(document).width()
        }).show().addClass('show');
    });

    //隐藏遮罩层
    $(".hideMask").click(function () {
        $("#mask").hide().removeClass('show');
    });

    $('.mapBox0 .content li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.vid-contain .vid-ran em').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(this).parent().parents('dl').siblings().find('.vid-ran').removeClass('active');
        $(this).parent().parent().find('.vid-bomb-box').find('li').eq($(this).parent().index()).show().siblings().hide();
        $(this).parent().parents('dl').siblings().find('.vid-bomb-box li').hide();
    });

    $('.close-bomb b').click(function(){
        $(this).parent('.close-bomb').parent().slideUp();
        $(this).parent().parent().parent().parent('.vid-contain').find('.vid-ran').eq($(this).parent('.close-bomb').parent().index()).removeClass('active');
        $(this).parent('.close-bomb').parent().slideUp();
        $('.vid-contain .vid-ran').eq($(this).parent('.close-bomb').parent().index()).removeClass('active');
    });

    $(".areaBlock01 a,.areaBlock02 a,.show-hotel a").click(function () {
        if ($(this).prev().hasClass('active')) {
            $(this).prev().removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $(this).prev().addClass('active');
            $(this).addClass('active');
        }
    });

    $('.vid-contain .vid-ran').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.vid-bomb-box li').eq($(this).index()).show().siblings().hide();
    });

    $('.genreNav a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

// 定位导航栏
function detailContentRight(num1, num2) {
    $(window).scroll(function(e){
        var footerTop = $('.user-eva-luate').offset().top;
        var bottom = footerTop - $(".play-day-list").height() - num2;
        if(window.pageYOffset){
            y = window.pageYOffset;
            if (y > num1 && y < bottom){
                $(".play-day-list").css({"position": "fixed", "top": 70});
            }else if(y >= bottom) {
                $(".play-day-list").css({"position": "absolute", "top": bottom + 5});
            }else {
                $(".play-day-list").css({"position": "absolute", "top": 20});
            }
        }
    });
}
function lineDetailDays() {
    $(window).scroll(function(e){
        var everyTop = new Array();
        var everyHeight = new Array();
        var everySpotTop = new Array();
        var everySpotHeight = new Array();
        $(".day-number-cont").each(function(e) {
            var index = $(this).index();
            everyTop[index] = $(this).offset().top;
            everyHeight[index] = $(this).height();

            everySpotTop[index] = new Array();
            everySpotHeight[index] = new Array();
            for (var i = 0; i < $(this).find("h5").length; i++) {
                everySpotTop[index][i] = $(this).find("h5").eq(i).offset().top;
                everySpotHeight[index][i] = $(this).find("h5").eq(i).height() + $(this).find("h5").eq(i).next('contet-show').height()+250;
            }
        });
        if(window.pageYOffset){
            y = window.pageYOffset;
            for (var i = 0; i < everySpotTop.length; i++) {
                for (var j = 0; j < everySpotTop[i].length; j++) {
                    if (y >= everySpotTop[i][j] - 15 && y < everySpotTop[i][j] + everySpotHeight[i][j]){
                        $(".play-day-list li").removeClass("active");
                        $(".play-day-list li").eq(i).addClass("active");
                    }
                }
            }
        }
    });
}

function offsetFun () {
    var gn = $('.genreNav');
    var vh = $(window).height();

    $('.apiao').scrollex({
        top: vh,
        enter: function() {
            gn.css({'position':'fixed','right':0});
        },
        leave: function () {
            gn.css({'position':'absolute','right':'auto'});
        }
    });

    $('.areaBlock').each(function (i) {
        $('.areaBlock').eq(i).scrollex({
            top: vh - 48,
            bottom: 55,
            enter: function() {
                $('.genreNav a').eq(i).addClass('active').siblings().removeClass('active');
            }
        });
    });
}

function lineOffFun() {
    var vh = $(window).height();
    var pdl = $('.play-day-list');
    $('.paly-detail-info h5').each(function (i) {
        $('.paly-detail-info h5').eq(i).scrollex({
            top: vh-50,
            enter: function() {
                pdl.children().eq(i).addClass('active').siblings().removeClass('active');
            }
        });
    });
    $('.paly-detail-info').scrollex({
        top: vh-70,
        bottom: pdl.height()+100,
        enter: function() {
            pdl.css({'position':'fixed','top':90,'bottom':'auto'});
        },
        leave: function () {
            if ($('.play-day-list li:first-child').hasClass('active')){
                pdl.css({'position':'absolute','top':40,'bottom':'auto'});
            }
        }
    });
    $('.paly-detail-info i').scrollex({
        bottom: pdl.height()+100,
        leave: function () {
            if ($('.play-day-list li:last-child').hasClass('active')){
                pdl.css({'position':'absolute','top':'auto','bottom':0});
            }
        }
    });
}