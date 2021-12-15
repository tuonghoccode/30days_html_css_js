const wrapper_hide = document.querySelector('.wrapper');

const close_btn = document.querySelector(".btn-close-modal");
const open_btn = document.querySelector(".btn-modal");
const close_icon = document.querySelector(".modal__header i");
console.log(close_btn)
function toggleOverlay() {
    wrapper_hide.classList.toggle('hide');
}

close_btn.addEventListener('click',toggleOverlay);
open_btn.addEventListener("click", toggleOverlay);
close_icon.addEventListener("click", toggleOverlay);