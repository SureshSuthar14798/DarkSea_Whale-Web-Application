
/*--------- Wow Js ----------*/

new WOW().init();


//video
  $("#play_1").click(function(){
        $(this).prev('.gr_1').find('video').get(0).play();
        $(this).hide();
  });


   $(".gr_1").click(function(){
        $(this).find('video').get(0).pause();
        $("#play_1").show();
  });