// Responsive Navbar Toggle

// Owl Carousal

$(function() {
    $("#owl-slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        responsive: {
          0: {
            items: 1
          }
        }
      });
  });

  $(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      navigation : true,
      items: 4, 
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        769: {
          items: 4
        }
      }
    });
   
  });

