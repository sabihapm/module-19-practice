
console.log("Sabiha Madraswalla's UX Portfolio");

  $("#skills").on("click", function() {
     console.log($(this));
    $("html, body").animate({
      scrollTop: $($(this).attr('href') ).offset().top
    }, 800);
    return false;
  });

$(document).click(function (){
  $("#work").on("click", function() {
    $("html, body").animate({
      scrollTop: $($(this).attr('href') ).offset().top
    }, 800);
    return false;
  });
});