
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  // autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  navText: ["<img src='myprevimage.png'>", "<img src='mynextimage.png'>"]

})

$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})