// $("h1").css("color","red");
// $(".menu li").css({
//     "background-color":"#999","color":"white"
// });
// $(".slider-thumb li:first-child").addClass("current");
// $(".slider-thumb img").on("mouseover",function(){
//     $(this).toggleClass("current");
// })

// $(".slider-comment h2").click(function(){
//     $(this).fadeOut(1000);
// });

$(".slider-thumb img").click(function(){
    let imgSrc = $(this).attr("src");
    console.log(imgSrc);
    let imgMain = $(".slider-img img");
    console.log(imgMain);
    $(imgMain).fadeOut(1000, function(){
        $(".slider-img img").attr("src",imgSrc).fadeIn(1000);
    });
});


// $(".slider-thumb img").click(function(){
//     let imgSrc = $(this).attr("src");
//     $(".slider-img img").attr("src",imgSrc);
//     // console.log(imgSrc);
// })

$(".btn-humbergar button").click(function(){
    $(".mainmenu-sm").toggleClass("fadein");
    if($(".mainmenu-sm").hasClass("fadein")){
        $(this).children("img").attr("src","images/btn-close.png");
    }else{
        $(this).children("img").attr("src","images/btn-humbergar.png");
    }

});
$(".menu li").on("mouseover",function () {
    $(".pulldown",this).stop().slideDown("500");})
    .on("mouseout",function () {
        $(".pulldown",this).stop().slideUp("500");
    });

    $('.tabitem').click(function(){
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.show').removeClass('show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.panelbox').eq(index).addClass('show');
    });


