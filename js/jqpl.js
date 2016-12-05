// egg 20151028
// 基于jquery的插件

// 回到顶部按钮显示逻辑
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 400) {
        $("#nav_top").fadeIn(400);
    } else {
        $("#nav_top").stop().fadeOut(400);
    }
});
// 回到顶部按钮点击逻辑
$("#nav_top").click(function() {
    $("html,body").animate({ scrollTop: "0px" }, 200);
});


