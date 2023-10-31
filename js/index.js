
console.log("Sabiha Madraswalla's UX Portfolio");

  $(".nav").on("click", function() {
    $("html, body").animate({
      scrollTop: $($(this).attr('href') ).offset().top
    }, 800);
    console.log($(this));
    return false;
  });