$(function() {
  $("header a").click(function() {
    var id = $(this).attr("href");
    var position = $(id).offset().top;

    $("html,body").animate(
      {
        scrollTop: position - 50
      },
      500
    );

    $("header a").removeClass("nav_active");
    $(this).addClass("nav_active");
  });
});
