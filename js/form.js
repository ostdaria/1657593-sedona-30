const formButton = document.querySelector(".button");
const formPopup = document.querySelector(".hotel-search-form");

formPopup.classList.add("hotel-search-form-hide");

formButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (formPopup.classList.contains("hotel-search-form-show")) {
    formPopup.classList.add("hotel-search-form-hide");
    formPopup.classList.remove("hotel-search-form-show");
  } else {
    formPopup.classList.add("hotel-search-form-show");
    formPopup.classList.remove("hotel-search-form-hide");
  }
  input-data.focus();
});

/* map */

const mapPopup = document.querySelector(".image-map");

const ifr = document.createElement('iframe');
ifr.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d209473.94337680045!2d-111.6948656!3d34.8805838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sby!4v1614000629656!5m2!1sru!2sby';
ifr.style.width = 1200 + 'px';
ifr.style.height = 594 + 'px';
ifr.style.border = 'none';

mapPopup.appendChild(ifr);
// mapPopup.style.backgroundImage = 'none';

