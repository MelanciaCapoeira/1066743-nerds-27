var link=document.querySelector(".btn_map"),popup=document.querySelector(".write_us"),close=popup.querySelector(".close_cross"),form=popup.querySelector("form"),email=popup.querySelector("[name=e-mail]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal_show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal_show"),popup.classList.remove("modal_error")}),form.addEventListener("submit",function(e){email.value||(e.preventDefault(),popup.classList.remove("modal_error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal_error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal_show")&&(popup.classList.remove("modal_show"),popup.classList.remove("modal_error")))});var link_map=document.querySelector(".img_map"),link_marker=document.querySelector(".map_marker"),popup_map=document.querySelector(".popup_map"),close_map=popup_map.querySelector(".close_cross");link_map.addEventListener("click",function(e){e.preventDefault(),popup_map.classList.add("modal_show_map")}),link_marker.addEventListener("click",function(e){e.preventDefault(),popup_map.classList.add("modal_show_map")}),close_map.addEventListener("click",function(e){e.preventDefault(),popup_map.classList.remove("modal_show_map")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup_map.classList.contains("modal_show_map")&&popup_map.classList.remove("modal_show_map"))});