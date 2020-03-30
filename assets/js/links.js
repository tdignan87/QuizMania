$("#link").click(function() {
    $('html, body').animate({
        scrollTop: $("#element_target").offset().top
    }, 1000);
});