const modal = document.querySelector(".modal");
const x = document.querySelector(".x");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

x.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const modal2 = document.querySelector(".modal2");
const y = document.querySelector(".y");
const closeButton2 = document.querySelector(".close-button2");

function toggleModal2() {
   modal2.classList.toggle("show-modal2");
}

function windowOnClick2(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
}

y.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);