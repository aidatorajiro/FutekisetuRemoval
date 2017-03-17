$(function(){
    setInterval(function(){
        $(".Tombstone").next().removeClass("u-hidden");
        $(".Tombstone").remove();
    }, 1000);
});