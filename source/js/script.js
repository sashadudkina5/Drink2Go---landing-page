// open and close menu on mobile

let navMain = document.querySelector('.main-nav__added-menu');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__added-menu--closed')) {
    navMain.classList.remove('main-nav__added-menu--closed');
    navMain.classList.add('main-nav__added-menu--opened');
  }
  else {
    navMain.classList.add('main-nav__added-menu--closed');
    navMain.classList.remove('main-nav__added-menu--opened');
  }
});

// map

var map = L.map('map').setView([59.968137, 30.316272], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var greenIcon = L.icon({
  iconUrl: '/img/map-marker.svg',

  iconSize:     [38, 50], // size of the icon
  iconAnchor:   [0, 50], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([59.968137, 30.316272], {icon: greenIcon}).addTo(map);

// slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  //pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// pagination. Hides "back" and "next" buttons

const firstPagePagination = document.querySelector('.pagination__link--first');
const lastPagePagination = document.querySelector('.pagination__link--last');
const nextButtonPagination = document.querySelector('.pagination__button--next');
const backButtonPagination = document.querySelector('.pagination__button--back');

const hidePaginationButtons = function () {
  if (firstPagePagination.classList.contains('pagination__link--current')) {
    backButtonPagination.classList.add('pagination__button--disabled')
  }
  if (lastPagePagination.classList.contains('pagination__link--current')) {
    nextButtonPagination.classList.add('pagination__button--disabled')
  }
}

hidePaginationButtons();
