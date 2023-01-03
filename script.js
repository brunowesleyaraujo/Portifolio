$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Business Site Developer", "Companies Web App´s Developer", "Frontend", "Backend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Business Site Developer", "Companies Web App´s Developer", "Frontend", "Backend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // project filter
    var list = document.querySelectorAll('.list');
    let card = document.querySelectorAll('.card');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for (let k = 0; k < card.length; k++) {
                card[k].classList.remove('active');
                card[k].classList.add('hide');

                if (card[k].getAttribute('data-item') == dataFilter ||
                    dataFilter == "all") {
                    card[k].classList.remove('hide');
                    card[k].classList.add('active');
                }
            }
        })
    }
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

