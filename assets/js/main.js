$(document).ready(function () {

    $('.hidden').css('display', 'none');

    $("#filter button").each(function () {

        $(this).on("click", function () {

            var filter = $(this).attr('class');

            if ($(this).attr('class') == 'all') {
                $('.hidden').contents().appendTo('#posts').hide().show('slow');
                $("#filter button").removeClass('active');
                $(this).addClass('active');
                $("#filter button").attr("disabled", false);
                $(this).attr("disabled", true);
            } else {
                $('.post').appendTo('.hidden');
                $('.hidden').contents().appendTo('#posts').hide().show('slow');
                $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
                $("#filter button").removeClass('active');
                $(this).addClass('active');
                $("#filter button").attr("disabled", false);
                $(this).attr("disabled", true);
            };

        });

    });
    /*==============================================
    ==============================================*/
    $(".skitter-large").skitter(); // skitter-large slider

    // AOS.init(); animate
    AOS.init({
        duration: 1000,
        once: true
    });


    /*==============================
    ================================
    =====================================*/
    // when navbar when click on sticky icon
    $(window).scroll(function () {
        var sc = $(this).scrollTop();
        if (sc > 100) { // show sticky navbar
            $('.navgation').addClass('sticky');
            $('.btn_top').css('display', 'block');
        } else {
            $('.navgation').removeClass('sticky');
            $('.btn_top').css('display', 'none');
        }



    });
    // scroll to top 
    $('.btn_top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500)
    });
    $('.toggle').click(function () {
        $('.menu').toggleClass('right-zero')
    })


});
// empty placeholder
$(function () {
    $("[placeholder]").focus(function () {
        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '')
    }).blur(function () {
        $(this).attr('placeholder', $(this).attr('data-text'))
    });

});
//$(document).ready(function () {
//    $('.zoom-gallery').featherlightGallery();
//});
