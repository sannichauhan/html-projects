$(document).ready(function(){ 
    
var $sticky = $('.sticky');
  console.log($sticky);
  var $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

  var generalSidebarHeight = $sticky.outerHeight();
  var stickyTop = $sticky.offset().top;
  var stickOffset = 25;
  var stickyStopperPosition = $stickyrStopper.offset().top;
  var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
  var diff = stopPoint + stickOffset;

  console.log('generalSidebarHeight:' + generalSidebarHeight);
  console.log('stickyTop:' + stickyTop );
  console.log('stickOffset:'  + stickOffset);
  console.log('stickyStopperPosition:' + stickyStopperPosition);
  console.log('stopPoint:' + stopPoint);
  console.log('diff:' + diff);

    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number
      if (stopPoint < windowTop) {
        $sticky.css({ position: 'absolute', top: diff});
      } else if (stickyTop < windowTop+stickOffset) {
        $sticky.css({ position: 'fixed', top: stickOffset });
      } else {
        $sticky.css({position: 'absolute', top: 'initial'});
      }
    });

  }

  $('.ham-icon').click(function(){
      $('.my-sidenav').css('max-width', '510px');
      $("body").css("overflow", 'hidden');
      $('body').addClass('overlaybg');
    });

    $('.cross-btn').click(function(){
      $('.my-sidenav').css('max-width', '0px');
      $("body").css("overflow", 'unset');
      $('body').removeClass('overlaybg');
    });  
  

  // Sticky nev Effect
  if($(this).scrollTop() > 50) {
   $('#header').addClass("sticky"); 
 } 
 else {
   $('#header').removeClass("sticky");
 } 
});
  
  
  collectMapSvg();


$(document).ready(function(){
     $(".my-sidenav").accordion();
       
      });
      // When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
    $('.fixdiv').css('display','block');

};
$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
      $('.fixdiv').css('display','none');
    }
    
});

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

 $('.panel-collapse').on('shown.bs.collapse', function (e) {
         var $panel = $(this).closest('.panel');
         $('html,body').animate({
           scrollTop: $panel.offset().top-80
         }, 500); 
      });

/*
 * Replace all SVG images with inline SVG
 */
 function collectMapSvg() {
  $('img.mapsvg').each(function(){
  //$('.'+cls).css({ fill: "#ff0000" });
  var $img = $(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
}

$('.bod-slider.owl-carousel').owlCarousel({
 autoplay: false,
 loop: false,
 dots:true,    
 nav: false,
 navText:"",
 touchDrag: true,
 mouseDrag: false,
 smartSpeed: 1000,
 margin:30,
 responsive: {
  0: {
   items: 1,
   stagePadding: 50
 },
 600: {
   items: 1,
   stagePadding: 50
 },
 1000: {
   items: 1,
   stagePadding:150
 }
}  
});

$('.capital-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '|' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop:true,
    autoplay:true,
autoplayTimeout:5000,
    margin:0,
    nav:true,
    navText:"",
    smartSpeed: 500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots:false
  });

$('.entity-slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        dots:true,   
        nav: false,
        navText:"",
        touchDrag: true,
        mouseDrag: false,
        smartSpeed:1000,
        margin:40,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items:3
          }
        } 
});

$('.comp-slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        dots:true,   
        nav: false,
        navText:"",
        touchDrag: true,
        mouseDrag: false,
        smartSpeed: 2000,
        margin:30,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items:1
          }
        } 
});

$('.awardsslider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' | ' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop:false,
    margin:0,
    nav:true,
    navText:"",
    smartSpeed: 500,
    dots:false,
    autoHeight:true
  });
  
  var sliders = $('.our-partnership.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter-f').text(carousel.relative(carousel.current()) + 1 + '|' + carousel.items().length);
}).owlCarousel({
  items: 1,
  loop:false,
  margin:0,
  nav:true,
  navText:"",
  smartSpeed: 500,
  dots:false,
  margin:30, 
     touchDrag: true,
        mouseDrag: false,
  autoHeight: true,  
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items:1
    }
  }
});
sliders.on('changed.owl.carousel', function(event) {
  setTimeout(function(){
      var activeEls = $('.owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
      setCarouselCaption( activeEls ); 
    },1);
});
function setCarouselCaption(el){
  $(".owl-item").removeClass("target-item");
  el.addClass("target-item");
}

var slidersn = $('.init-slider.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter-f').text(carousel.relative(carousel.current()) + 1 + '|' + carousel.items().length);
}).owlCarousel({
  items: 1,
  loop:false,
  margin:0,
  nav:true,
  navText:"",
     touchDrag: true,
        mouseDrag: false,
  smartSpeed: 500,
  dots:false,
  margin:30,   
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items:1
    }
  }
});


var sliderss = $('.seven-slider.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter-s').text(carousel.relative(carousel.current()) + 1 + '|' + carousel.items().length);
}).owlCarousel({
  items: 1,
  loop:false,
  margin:0,
  nav:true,
  navText:"",
     touchDrag: true,
        mouseDrag: false,
  smartSpeed: 500,
  dots:false,
  margin:0,   
  autoHeight: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items:1
    }
  }
});
