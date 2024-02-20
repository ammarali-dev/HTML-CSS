const headerNavButton = document.querySelector('#nav-icon');
const headerNavButton = document.querySelector('#nav-icon');
let showMenu = false;

headerNavButton.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item=> item.classList.add('open'));
        showMenu=true;
    }
    else{
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item=> item.classList.remove('open'));
        showMenu=false;
    }
}