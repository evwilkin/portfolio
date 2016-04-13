$(document).ready(function(){

  // Collapse navbar
  $(".button-collapse").sideNav();

  // Smooth Scroll
  $('a').smoothScroll();

  // Fade in home page
  setTimeout(function() {
    $("#developer").fadeIn(1200).removeClass("hide");
  }, 800);
  setTimeout(function() {
    $("#designer").fadeIn(1200).removeClass("hide");
  }, 1600);
  setTimeout(function() {
    $("#doer").fadeIn(1200).removeClass("hide");
  }, 2400);

  // Add home button to navbar when home page not displayed
  var headerHeight = $("header").height();
  $(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    if (wScroll >= headerHeight * .85) {
      $("a.brand-logo").fadeIn(350).removeClass("hide");
      $("nav").fadeIn(200).addClass("background");
    } else {
      $("a.brand-logo").fadeOut(350);
      $("nav").removeClass("background");
    }
  });
});

var home = document.getElementById("home");
var dimensions = home.getClientRects()[0];
var pattern = Trianglify({
    width: dimensions.width,
    height: dimensions.height,
    cell_size: 40, 
    seed: 'ywn3w', 
    x_colors: 'random'
});

home.appendChild(pattern.canvas());
