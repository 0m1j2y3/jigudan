$(function(){
    $('.nav> li').hover(function(){
        $(this).children('.sub').stop().slideToggle();
    });
});