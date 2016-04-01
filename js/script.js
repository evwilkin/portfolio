$(document).ready(function(){
  // Collapse navbar
  $(".button-collapse").sideNav();

  // Run fullpage.js
  $('#fullpage').fullpage({
    menu: ".nav",
    autoScrolling: false,
    resize: true
  });

  // Add home button to navbar when home page not displayed
  var headerHeight = $("header").height();
  $(window).scroll(function() {
    console.log(headerHeight);
    var wScroll = $(window).scrollTop();
    console.log(wScroll);
    if (wScroll >= headerHeight - 100) {
      $("a.brand-logo").fadeIn(350).removeClass("hide");
    } else {
      $("a.brand-logo").fadeOut(350).addClass("hide");
    }
  });
});

var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
});
Trianglify({cell_size: 40, seed: 'ywn3w', x_colors: 'random'}).canvas()

document.body.appendChild(pattern.canvas());