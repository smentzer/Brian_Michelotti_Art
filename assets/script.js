document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

  $(".carousel").carousel({});
  autoplay();
  
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }