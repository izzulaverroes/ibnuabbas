const burgerButton = document.querySelector('.burger input');
const burgerBody = document.querySelector('nav ul')
const Body = document.body;
const themeButton = document.querySelector('[color-theme-toggle]');

burgerButton.addEventListener('click', function () {
  burgerBody.classList.toggle('active')
  document.querySelector('.burger span:nth-child(2)').classList.toggle('x1')
  document.querySelector('.burger span:nth-child(3)').classList.toggle('x2')
  document.querySelector('.burger span:nth-child(4)').classList.toggle('x3')
  document.querySelector('.nav').classList.remove('transparant')
})

document.addEventListener('click', function (e) {
  if (!burgerBody.contains(e.target) && !burgerButton.contains(e.target)) {
    burgerBody.classList.remove('active');
    document.querySelector('.burger span:nth-child(2)').classList.remove('x1')
    document.querySelector('.burger span:nth-child(3)').classList.remove('x2')
    document.querySelector('.burger span:nth-child(4)').classList.remove('x3')
  }
})

// Count Animation
let valueDisplays = document.querySelectorAll(".num");
let interval = 90000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Swiper JS
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1120: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// Transparent nav
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var gap = 0;
    if (window.pageYOffset > gap) {
      document.querySelector('.nav').classList.remove('transparant');
    } else {
      document.querySelector('.nav').classList.add('transparant');
      // Fixing nav actived link
      document.querySelector('nav ul li:nth-child(1) a').classList.add('link-active');
    }
  });
});

// Switch theme
const darkToggle = document.querySelector('.dark-button span')
darkToggle.addEventListener('click', function switchTheme() {
  var setTheme = document.body;

  setTheme.classList.toggle('dark-theme');

  var theme;
  darkToggle.classList.toggle('dark-active');
  if (setTheme.classList.contains('dark-theme')) {
    theme = "Switched"
  }else{
    theme = "Normal"
  }
  console.log(theme)

  localStorage.setItem("pageTheme", JSON.stringify(theme))
});

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
console.log(getTheme)

if (getTheme === "Switched") {
  Body.classList = "dark-theme";
  darkToggle.classList = "dark-active"
};


// Nav link active on scroll
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a[data-target]");

  sections.forEach(function (section) {
    let top = section.offsetTop - 20;
    let bottom = top + section.offsetHeight;

    if (window.pageYOffset >= top && window.pageYOffset < bottom) {
      navLinks.forEach(function (link) {
        if (link.getAttribute("data-target") === section.id) {
          link.classList.add("link-active");
        } else {
          link.classList.remove("link-active");
        }
      });
    }
  });
});


// Loading
window.addEventListener('load', () => {
  document.querySelector('.loader').classList.add('loader--hidden');

  document.querySelector('.loader').addEventListener('transitionend', () => {
    document.body.removeChild(document.querySelector('.loader'))
  })
})