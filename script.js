$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    function newDate() {
      return new Date().getFullYear();
    }
    
    $(document).ready(function() {
      $("#autodate").text(newDate());
    });
  });
  