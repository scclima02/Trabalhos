
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


// Toggle Contact Form
function toggleContact() {
    const toggleContact = document.querySelector(".toggleContact");
    const contactMenu = document.querySelector(".contactMenu");
    toggleContact.classList.toggle("c-active");
    contactMenu.classList.toggle("c-active");
}
// End toggle Contact Form

// Swiper Slide
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
  });
  // End Swiper Slide