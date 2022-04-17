$(document).ready(function () {
  // 下拉菜单
  $("header .header-bot .dropdown").mouseenter(function () {
    $(this).find(".dropdown-menu").slideDown(500);
    $(this).find(".line").css("opacity","1").stop().animate({ width: "100%" }, 100);
    $(this).find(".line2").css({"opacity":"0"}).animate({"width":"90%"});
  });
  $("header .header-bot .dropdown").mouseleave(function () {
    $(this).find(".dropdown-menu").stop().slideToggle(100);
    $(this).find(".line").css({"opacity":"0", "width": "0"});
    $(this).find(".line2").css("opacity", "1").stop().animate({width: "0" }, 100);
  });

  // 返回顶部 导航固定
  $(window).scroll(function () {
    var top = $("html").scrollTop();
    if (top < 860) {
      $(".gotop").css("display", "none");
    } else {
      $(".gotop").css("display", "block");
    }
    if (top > 200) {
      $("header .header-bot").css({
        position: "fixed",
        top: "0",
        left: "0",
        "line-height": "80px",
        "box-shadow": "0px 5px 15px rgb(182, 181, 181)",
      });
      $("header .header-area").css({
        position: "fixed",
        top:"0",
        left: "0",
        "z-index":"9999",
        width:"100%",
        background:"#fff",
        "box-shadow": "0px 5px 15px rgb(182, 181, 181)",
      })
      $("header .navbar-brand").css("line-height", "80px");
    } else {
      $("header .header-bot").css({
        position: "static",
        "line-height": "120px",
        "box-shadow": "none",
        "z-index":"9999",
      });
      $("header .header-area").css({
        position: "static",      
        "box-shadow": "none",
        width:"100%"
      });
    }
  });

  $(".gotop").click(function () {
    $("html").animate({ scrollTop: "0" }, 100);
  });
  // 选项卡
  $(".HotProduct li").click(function (event) {
    event.preventDefault();
    var ind = $(this).index();
    // console.log(ind);

    $(".tab-content .tab-pane1")
      .eq(ind)
      .css("display", "block")
      .siblings()
      .css("display", "none");
    console.log(11);
  });
  //点击搜索事件

  $("header .nav-link>.i-active").click(function (event) {
    event.preventDefault();
    if ($(this).hasClass("i-search1")) {
      $(this)
        .addClass("i-guanbi")
        .removeClass("i-search1")
        .css({ position: "absolute", left: "-12px" });
      $(this)
        .siblings()
        .animate({ opacity: "1", left: "-370px", "z-index": "100" }, 300);
    } else {
      $(this)
        .siblings()
        .animate(
          { "z-index": "0", opacity: "0", left: "-340px", "z-index": "-1" },
          50
        );
      $(this)
        .removeClass("i-guanbi")
        .addClass("i-search1")
        .animate({ left: "-22px" }, 50);
    }
  });
  //小眼睛消失出现
  $(".product-action-btn-1").mouseenter(function () {
    $(this).css("background-color", "#e97730");
    $(this).find("i").css("color", "#fff");
  });
  $(".product-action-btn-1").mouseleave(function () {
    $(this).css("background-color", "#fff");
    $(this).find("i").css("color", "#000");
  });
  $(".product-action-btn-2").mouseenter(function () {
    $(this).css("background-color", "#e97730");
    $(this).find("i").css("color", "#fff");
  });
  $(".product-action-btn-2.btn").mouseleave(function () {
    $(this).css("background-color", "#fff");
    $(this).find("i").css("color", "#000");
  });
  $(".product-action-2-wrap .product-action-btn-2").mouseleave(function () {
    $(this).css("background-color", "#000");
    $(this).find("i").css("color", "#fff");
  });
  $(".product-wrap-1").mouseenter(function () {
    // console.log(1);
    $(this).find(".product-img img").css("transform", "scale(1.1)");
    $(this)
      .find(".product-action-btn-1")
      .animate({ bottom: "0", opacity: 1 }, 50);
    $(this)
      .find(".product-action-wrap .product-action-btn-2")
      .animate({ top: "0", opacity: 1 }, 50);
    $(this)
      .find(".product-action-2-wrap .product-action-btn-2")
      .animate({ bottom: "0px" }, 50);
  });
  $(".product-wrap-1").mouseleave(function () {
    // console.log(1);
    $(this).find(".product-img img").css("transform", "scale(1)");
    $(this)
      .find(".product-action-btn-1")
      .animate({ bottom: "30px", opacity: 0 }, 50);
    $(this)
      .find(".product-action-wrap .product-action-btn-2")
      .animate({ top: "30px", opacity: 0 }, 50);
    $(this)
      .find(".product-action-2-wrap .product-action-btn-2")
      .animate({ bottom: "-43px" }, 50);
  });
  $(".product-wrap").mouseenter(function () {
    // console.log(1);
    $(this).find(".product-img img").css("transform", "scale(1.1)");
    $(this)
      .find(".product-action-btn-1")
      .animate({ bottom: "0", opacity: 1 }, 50);
    $(this)
      .find(".product-action-wrap .product-action-btn-2")
      .animate({ top: "0", opacity: 1 }, 50);
    $(this)
      .find(".product-action-2-wrap .product-action-btn-2")
      .animate({ bottom: "0px" }, 50);
  });
  $(".product-wrap").mouseleave(function () {
    // console.log(1);
    $(this).find(".product-img img").css("transform", "scale(1)");
    $(this)
      .find(".product-action-btn-1")
      .animate({ bottom: "30px", opacity: 0 }, 50);
    $(this)
      .find(".product-action-wrap .product-action-btn-2")
      .animate({ top: "30px", opacity: 0 }, 50);
    $(this)
      .find(".product-action-2-wrap .product-action-btn-2")
      .animate({ bottom: "-43px" }, 50);
  });
  //图片放大缩小
  $(".NewFurniture .new").mouseenter(function () {
    $(this).find("img").css("transform", "scale(1.1)");
  });
  $(".NewFurniture .new").mouseleave(function () {
    $(this).find("img").css("transform", "scale(1)");
  });
  $(".service-img").mouseenter(function () {
    $(this).find("img").css("transform", "scale(.9)");
    $(this).css("background-color", "#e97730");
  });
  $(".service-img").mouseleave(function () {
    $(this).find("img").css("transform", "scale(1)");
    $(this).css("background-color", "#f2f2f2");
  });
  $(".ModernChair-img").mouseenter(function () {
    $(this).find("img").css("transform", "scale(.9)");
  });
  $(".ModernChair-img").mouseleave(function () {
    $(this).find("img").css("transform", "scale(1)");
  });
  $(".blog-wrap").mouseenter(function () {
    $(this).find("img").css("transform", "scale(1.2)");
  });
  $(".blog-wrap").mouseleave(function () {
    $(this).find("img").css("transform", "scale(1)");
  });
  //hover改变颜色
  $(".blog-wrap h3").mouseenter(function () {
    $(this).css("color", "#e97730");
  });
  $(".blog-area-2 h3").mouseleave(function () {
    $(this).css("color", "#4a4a4a");
  });
  $(" .blog-area-2 .blog-btn a").mouseenter(function () {
    $(this).css("color", "#e97730");
  });
  $(".blog-area-2 .blog-btn a").mouseleave(function () {
    $(this).css("color", "#4a4a4a");
  });
  $(".gotop").mouseenter(function () {
    $(this).css("background-color", "#e97730");
    $(this).find("a").css("font-size", "4px");
  });
  $(".gotop").mouseleave(function () {
    $(this).css("background-color", "#262626");
    $(this).find("a").css("font-size", "10px");
  });
  $("h3").mouseenter(function () {
    $(this).css("color", "#e97730");
  });
  $("h3").css("transition", "all .4s");
  $("h3").mouseleave(function () {
    $(this).css("color", "#4a4a4a");
  });
  $(".Shop-Mordern .row").mouseenter(function () {
    $(this)
      .find(".ModernChair-img-2 button")
      .animate({ opacity: "1", top: "180px" });
  });
  $(".Shop-Mordern .row").mouseleave(function () {
    $(this)
      .find(".ModernChair-img-2 button")
      .animate({ opacity: "0", top: "250px" });
  });

  // shop页面点击切换页面
  $(".shop-view-mode a").click(function (event) {
    event.preventDefault();
    // console.log($(this).index());
    if ($(this).index() == 0) {
      $(".HotProduct-1").css("display", "block");
      $(".HotProduct-2").css("display", "none");
    } else {
      $(".HotProduct-2").css("display", "block");
      $(".HotProduct-1").css("display", "none");
    }
  });
});
