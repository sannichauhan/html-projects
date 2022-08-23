<script src="js/jquery-3.2.1.min.js"></script> 
  <script src="js/bootstrap.min.js"></script> 
  <script src="js/owl.carousel.min.js"></script> 
  <script src="js/jquery.waypoints.min.js"></script> 
  <script src="js/jquery.counterup.js"></script> 
  <script src="js/custom.js"></script> 
  <script src="js/wow.min.js"></script>
  <script src="js/script.js"></script>
  <script>
    jQuery(document).ready(function( $ ) {
     $('.counter').counterUp({
       delay: 10,
       time: 1500,
     });
    });
 </script>
 <script>
  new WOW().init();
</script>

<script>
$(document).ready(function(){
  $('.nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
  $(".mega-dropdown a").click(function () {
    $(".nav-icon3").removeClass("open");
});
});
</script>