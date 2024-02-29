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

// map leaflet

var map = L.map('map').setView([59.968137, 30.316272], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var greenIcon = L.icon({
  iconUrl: './img/map-marker.svg',

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

  //autoplay
  autoplay: {
    delay: 2500,
  },

  //autoplay will be paused on pointer (mouse) enter over Swiper container
  pauseOnMouseEnter: true,

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


// noUiSlider for Price bar

const priceInputs = document.querySelector('.price-value__input');
const minPrice = document.querySelector('.price-value__input--min');
const maxPrice = document.querySelector('.price-value__input--max');
const priceSlicer = document.querySelector('.price-range__wrapper');

//Appending <option> elements

for (let i = 0; i <= 1000; i++) {

  const option = document.createElement("option");
  option.text = i;
  option.value = i;

  priceInputs.appendChild(option);
}

// Initializing the slider
noUiSlider.create(priceSlicer, {
  start: [10, 440],
  connect: true,
  range: {
      'min': 0,
      'max': 1000
  }
});


// Updating the <input>s
priceSlicer.noUiSlider.on('update', function (values, handle) {
  let value = values[handle];

  if (handle === 0) {
      minPrice.value = Math.round(value);
  } else {
      maxPrice.value = Math.round(value);
  }
});

minPrice.addEventListener('change', function () {
  priceSlicer.noUiSlider.set([this.value, null]);
});

maxPrice.addEventListener('change', function () {
  priceSlicer.noUiSlider.set([null, this.value]);
});

const toggleMin = document.querySelector('.noUi-handle-lower');
const toggleMax = document.querySelector('.noUi-handle-upper');

toggleMin.setAttribute('aria-label', 'decrease price range')
toggleMax.setAttribute('aria-label', 'increase price range')

//smooth autoscroll to "catalog" section

const catalogNavigationCatalog = document.querySelector('[data-action="catalog-navigation"]');
const catalog = document.querySelector('.catalog');
console.log(catalogNavigationCatalog)

const leadToCatalog = () => {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    catalogNavigationCatalog.addEventListener('click', (event) => {
      event.preventDefault();
      catalog.scrollIntoView({block: 'center', behavior: 'smooth'});
    });
  }
};

leadToCatalog();
