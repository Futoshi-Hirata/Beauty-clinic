var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
});

$('.fadeInLeft').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  offset: '50%',
});

$('.fadeInRight').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  offset: '50%',
});
$(".qa dt").on("click", function () {
  $(this).parent().toggleClass("open");
  $(this).next().slideToggle();
});
$('.fadeInUp').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});
function initMap() {
  var mapOptions = {
    center: {lat: -34.397, lng: 150.644}, // マップの中心座標
    zoom: 12 // ズームレベルを設定
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

$(".hamburger_icon").on("click", function (e) {
  $(".hamburger-nav").slideToggle();
});
