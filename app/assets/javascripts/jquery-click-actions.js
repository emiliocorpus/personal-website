$(document).on('click','.searchbychar', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 600);
});



$(document).on('click','.arrow-links', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 600);
});



$(document).on('click','.more-about-me', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $(target).slideToggle()
    $('.more-about-me').hide()
    $('.hide-more-about-me').show()
});

$(document).on('click','.hide-more-about-me', function(event) {
    event.preventDefault();
    $('.more-about-me').show()
    $('#more-about-me').slideToggle()
    $('.hide-more-about-me').hide()
});