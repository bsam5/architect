

function animateValue(obj, start, end, signal, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + signal;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
const obj1 = document.getElementById("projects");
const obj2 = document.getElementById("clients");
const obj3 = document.getElementById("experience");


$(function () {

    $(".loader").delay(0).fadeOut("slow");
    $("#layout").delay(0).fadeOut("slow");

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    // show dropdown  
    $('.dropdown-toggle').mouseover(function () {
        $('.open').show();
    })

    $('.dropdown-toggle').mouseout(function () {
        t = setTimeout(function () {
            $('.open').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function () {
            $('.open').show();
            clearTimeout(t);
        }).on('mouseleave', function () {
            $('.open').hide();
        })
    })
    // height div
    let winHeight = $(window).height(),
        navHeight = $('.navbar').innerHeight();
    $('.architecture').height(winHeight - navHeight);
    //   aos library
    AOS.init({
        duration: 800,
        easing: "slide",
        once: true,
        offset: 130,
    });
    // counters
    var flag = true;
    $(window).scroll(function () {
        if (flag && $("#counts").hasClass("aos-animate")) {
            animateValue(obj1, 0, obj1.getAttribute('data-counter'), '+', 5000);
            animateValue(obj2, 0, obj2.getAttribute('data-counter'), '+', 5000);
            animateValue(obj3, 0, obj3.getAttribute('data-counter'), '+', 5000);
            flag = false
        }
    })
})



