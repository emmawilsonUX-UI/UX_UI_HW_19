function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

$("container").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });