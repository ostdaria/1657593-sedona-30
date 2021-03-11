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


  // formPopup.classList.add("hotel-search-form-show");
  // formPopup.classList.toggle("hotel-search-form-hide");
});

