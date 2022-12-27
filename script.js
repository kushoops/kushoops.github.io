$(window).scroll(function(){
    var wScroll=$(this).scrollTop();

    if(wScroll>$('.gambar11').offset().top-500){
        $('.gambar11').addClass('muncul');
        console.log("ok");
    }

    if(wScroll>$('.gambar21').offset().top-350){
        $('.gambar21').addClass('muncul');
        console.log("ok");
    }
    
    if(wScroll>$('.gambar22').offset().top-350){
        $('.gambar22').addClass('muncul');
        console.log("ok");
    }
    
    if(wScroll>$('.gambar23').offset().top-350){
        $('.gambar23').addClass('muncul');
        console.log("ok");
    }
    
    if(wScroll>$('.gambar31').offset().top-350){
        $('.gambar31').addClass('muncul');
        console.log("ok");
    }
    
    if(wScroll>$('.gambar32').offset().top-350){
        $('.gambar32').addClass('muncul');
        console.log("ok");
    }
    
    if(wScroll>$('.gambar41').offset().top-500){
        $('.gambar41').addClass('muncul');
        console.log("ok");
    }
    
});

// $(window).on('load',function(){
    $('.jumbotron .t1').addClass('muncul');
    $('.jumbotron .t2').addClass('muncul');
    $('.jumbotron .t3').addClass('muncul');
    $('.jumbotron .t4').addClass('muncul');
    $('.jumbotron .g1').addClass('muncul');
    $('.jumbotron .g2').addClass('muncul');
// });
