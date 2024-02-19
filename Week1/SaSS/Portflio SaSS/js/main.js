const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn_burger');
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamBurger.classList.add('open');
        showMenu=true;
    }
}