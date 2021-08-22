$('.sub-menu ul').hide();
$(".nav__item").click(function() {
    $(document).find(".sub-menu").children("ul").slideUp(200);
    $(this).parent(".sub-menu").children("ul").stop().slideToggle(200);
    $(this).find(".right").toggleClass("arrow--down arrow--up");

});