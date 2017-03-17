$(function(){
    /* うわーこんな長いコード必要なかったわ〜チョー簡単に実装できたわ〜でもなんか頑張った証として残しておきたいから残すわ〜
    var id = "842506512308162560";
    $.ajax({
        type: 'GET',
        url: 'https://cdn.syndication.twimg.com/tweets.json?ids=' + id,
        timeout: 10000,
        cache: true,
        dataType: 'json'
    }).done(function(response, textStatus, jqXHR) {
        $(response[id]).find("*[data-srcset]").each(function(){
            decodeURIComponent($(this).attr("data-srcset")).split(",").pop().split(" ").shift();
        });
    }).fail(function(jqXHR, textStatus, errorThrown ) {
        console.log(jqXHR, textStatus, errorThrown);
    });
    */
    setInterval(function(){
        $(".Tombstone").next().removeClass("u-hidden");
        $(".Tombstone").remove();
    }, 1000);
});