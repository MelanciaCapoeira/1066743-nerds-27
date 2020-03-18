var link = document.querySelector(".btn_map");
var popup = document.querySelector(".write_us");
var close = popup.querySelector(".close_cross");
var form = popup.querySelector("form")
var email = popup.querySelector("[name=e-mail]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");
    popup.classList.remove("modal_error");
});

form.addEventListener("submit", function (evt) {
    if (!email.value) {
      evt.preventDefault();
      popup.classList.remove("modal_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal_error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal_show")) {
        popup.classList.remove("modal_show");
        popup.classList.remove("modal_error");
      }
    }
});

var link_map = document.querySelector(".img_map");
var link_marker = document.querySelector(".map_marker");
var popup_map = document.querySelector(".popup_map");
var close_map = popup_map.querySelector(".close_cross");

link_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.add("modal_show_map");
});

link_marker.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.add("modal_show_map");
});

close_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.remove("modal_show_map");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup_map.classList.contains("modal_show_map")) {
        popup_map.classList.remove("modal_show_map");
      }
    }
});