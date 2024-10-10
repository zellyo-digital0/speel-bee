$('.testimonialSlider').slick({
  slidesToShow: 2,
  dots: true,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '25px', // Adjust center padding if needed
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for mobile
        centerPadding: '0px',
      },
    },
  ],
});
