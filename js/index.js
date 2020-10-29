let hamburger = document.querySelector('.himCon');
let buttonClose = document.querySelector('.close');


hamburger.addEventListener('click', toggleClass);
buttonClose.addEventListener('click', toggleClass);


function toggleClass() {

    let menu = document.querySelector('.mainMenu');
    menu.classList.toggle("toggleCls");
    hamburger.classList.toggle("toggleCls");
    buttonClose.classList.toggle("toggleCls");



}