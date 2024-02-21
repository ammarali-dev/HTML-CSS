const menuContainer= document.querySelector('.menu-container');
const NavIcon = document.querySelector('.nav-icon');
const MenuCloseIcon = document.querySelector('.menu-close-icon');
const menuOverlay = document.querySelector('.menu-overlay');

let showMenu = false;

console.log(NavIcon);
console.log(menuContainer);
NavIcon.addEventListener('click',MenuOn);
MenuCloseIcon.addEventListener('click',MenuOff);

menuOverlay.addEventListener('click',MenuOff);

function MenuOn(){
        menuContainer.classList.remove('menu-close');
        menuContainer.classList.add('menu-open');
        menuOverlay.classList.remove('display-none');
}
function MenuOff(){

   
        menuContainer.classList.remove('menu-open');

        menuContainer.classList.add('menu-close');
        menuOverlay.classList.add('display-none');

      
       
}