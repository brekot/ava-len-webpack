import $ from "jquery";

window.jQuery = $;
window.$ = $;

$(function() {

    // Прикрепляем шапку
    var header = $('.main-header');
    var offset = header.offset().top;

    $(window).scroll(function() {

        if ($(this).scrollTop() > offset)
        {
            header.addClass('main-header_fixed');
        }
        else
        {
            header.removeClass('main-header_fixed');
        }
    });
    
    // Отслеживание прокрутки страницы
    $(window).scroll(function(){

        var scroll = $(window).scrollTop();

        var sections = $('.block-point');

        sections.each(function(i, el) {

            var top  = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var id = $(el).attr('id');

            if (scroll > top && scroll < bottom)
            {
                $('.menu-top__link_active').removeClass('menu-top__link_active');
                $('a[href="#'+id+'"]').addClass('menu-top__link_active');
            }
        });

   /*     if ($('body').height() - 10 < ($(window).height() + scroll))
        {
            $('.menu-top__link_active').removeClass('menu-top__link_active');
            $('.menu-top:last-child').addClass('menu-top__link_active');
        }*/
    });

    // Переход по ссылкам меню
    $("nav").on("click", "a", function (event) {

        event.preventDefault();

        var id = $(this).attr('href'),

        top = $(id).offset().top - 60;

        $('body,html').animate({scrollTop: top}, 800);
    });
});