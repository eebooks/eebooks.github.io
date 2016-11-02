function windowSize() {
    if ($(window).width() <= '768' && !($('*').is('.title-s'))) {
        $(".navbar-header").append("<a class='title-s'>eBooks</a>");
    }
    if ($(window).width() >= '768') {
        $("a.title-s").remove();
    }
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if ($(window).width() >= '768') {
    if (scrollTop >= 180) {
        $('.navbar').addClass('fixed');
        $('.title').css({'margin-bottom': '90px' });
    } else {
        $('.navbar').removeClass('fixed');
        $('.title').css({'margin-bottom': '0' });
    }}
    else {
        $('.navbar').addClass('fixed');
        $('.title').css({'margin-bottom': '60px' });
    }
}
$(window).load(windowSize);
$(window).resize(windowSize);
$(window).scroll(windowSize);

$(document).ready(function(){
    $('.night').click(function(e){
        e.preventDefault();
        $('html').toggleClass('nightmode');
    });
});