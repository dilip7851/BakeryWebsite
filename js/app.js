$('.section4-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
var menu = document.querySelector(".hamburger-menu");
var openMenu = document.getElementById("openMenu");
var closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  menu.style.left = "0px";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  menu.style.left = "-260px";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});

document.addEventListener(
  'scroll',
  function (e) {
    if (window.scrollY > 46) {
      document.body.classList.add('stick')
    } else {
      document.body.classList.remove('stick')
    }
  }
)