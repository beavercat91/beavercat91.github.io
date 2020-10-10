$(document).ready(function(){
    $("#up").click(function(event){
        event.preventDefault();
        $("html, body").animate({
        scrollTop: 0}, '300');
        return false;
    });
});
