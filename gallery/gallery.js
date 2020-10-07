HTML SCSS JSResult
EDIT ON
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  mousewheel: {},
  effect: 'cube',
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
});

$(document).ready(function(){
    $("#up").click(function(event){
        event.preventDefault();
        $("html, body").animate({
        scrollTop: 0}, '300');
        return false;
    });
});
