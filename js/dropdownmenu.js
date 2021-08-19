$('.sub-menu ul').hide();
$(".sub-menu a").click(function() {
    $(document).find(".sub-menu").children("ul").slideUp();
    $(this).parent(".sub-menu").children("ul").stop().slideToggle();
    $(this).find(".right").toggleClass("arrow--down arrow--up");

});