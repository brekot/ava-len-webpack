import $ from "jquery";

window.jQuery = $;
window.$ = $;

$(function() {

    // Прикрепляем шапку
    var header = $('.main-header');
    var offset = header.offset().top + ($(window).width() > 767 ? 50 : 0);

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

            var top  = $(el).offset().top - 200;
            var bottom = top + $(el).height();
            var id = $(el).attr('id');

            if (scroll > top && scroll < bottom)
            {
                $('.menu-top__link_active').removeClass('menu-top__link_active');
                $('a[href="#'+id+'"]').addClass('menu-top__link_active');
            }
        });

        if ($('body').height() - 10 < ($(window).height() + scroll))
        {
            $('.menu-top__link_active').removeClass('menu-top__link_active');
            $('.menu-top__link:last-child').addClass('menu-top__link_active');
        }
    });

    // Переход по ссылкам меню
    $("nav").on("click", "a", function (event) {

        event.preventDefault();

        $('.main-header__center').removeClass('main-header__center_open');

        $('body').css({'overflow': 'auto'});

        var id = $(this).attr('href'),

        top = $(id).offset().top - ($(window).width() > 767 ? 160 : 60);

        $('body,html').animate({scrollTop: top}, 1000);
    });

    // Раскрытие меню на мобиле
    $('.menu-top-btn').click(function(){

        $('.main-header__center').addClass('main-header__center_open');
        $('body').css({'overflow': 'hidden'});
    });

    $('.menu-top-close').click(function(){

        $('.main-header__center').removeClass('main-header__center_open');
        $('body').css({'overflow': 'auto'});
    });
});