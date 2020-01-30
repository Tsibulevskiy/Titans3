$(document).ready(function() {
    $('#sliderOne').bxSlider({
        pager: false,
        nextSelector: '#sliderArrowRight',
        prevSelector: '#sliderArrowLeft',
        slideMargin: 35,
        adaptiveHeight: true,
        adaptiveHeightSpeed: 500,
        infiniteLoop: false
    });
    $('#secondSlider').bxSlider({
        pager: false,
        nextSelector: '#sliderArrowRightReview',
        prevSelector: '#sliderArrowLeftReview',
        slideMargin: 35,
        adaptiveHeight: true,
        adaptiveHeightSpeed: 500,
        infiniteLoop: false,
        prevText: '',
        nextText: ''
    });
    $('#sliderThree').bxSlider({
        pager: false,
        nextSelector: '#sliderArrowRightJornal',
        prevSelector: '#sliderArrowLeftJornal',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 500,
        infiniteLoop: false,
        prevText: '',
        nextText: ''
    });


    (function($) {

        $('.popup').click(function(e) {
            if (e.target.className.indexOf('js-popup-close') !== -1) {
                $(this).fadeOut();
            }
        });

        let $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            return false;
        });

        $('.js-popup-open').on('click', function() {
            $('.popup').fadeIn();
        });

        let $clock_wrap = $('.clock-wrap'),
            date_start = '2019-09-17 20:00:00',
            Date_start = new Date(date_start),
            date_now = new Date(),
            template = `
                <div class="clock-elem">
                    <span>%D</span>
                    <p class="text-secondary">дней</p>
                </div>
                <div class="clock-elem">
                    <span>%H</span>
                    <p class="text-secondary">часов</p>
                </div>
                <div class="clock-elem">
                    <span>%M</span>
                    <p class="text-secondary">минут</p>
                </div>
                <div class="clock-elem clock-elem-320">
                    <span>%S</span>
                    <p class="text-secondary">секунд</p>
                </div>
                <div class="clock-elem ms-wrap">
                    <span class="ms">00</span>
                    <p class="text-secondary">милисек.</p>
                </div>
            `;

        let count = 100;

        setInterval(timer, 10);

        function timer() {
            let _null = '';
            if (count <= 0) {
                count = 100;
            }
            count--;
            if (count < 10) {
                _null = '0'
            }
            $('.ms').text(_null + count);
        }
        if (Date_start < date_now) {
            $clock_wrap.hide()
        }

        $clock_wrap.countdown(date_start, function(event) {
            $(this).html(event.strftime(template));
        }).on('finish.countdown', function() {
            $clock_wrap.hide();
        });

    })(jQuery);

    $('#downArrow').click(function() {
        let height = $(window).height();
        $("html, body").animate({
            scrollTop: (height)
        }, 1500);
        return false;
    });

    $('.click_more').on('click', function() {
        $('#more').toggle();
    })
});