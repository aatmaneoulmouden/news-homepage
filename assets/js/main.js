const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileMenu = document.querySelector('#mobile-menu');

const openCloseMenu = (toAdd, toRemove)=> {
    mobileMenu.classList.add(toAdd);
    mobileMenu.classList.remove(toRemove);
}

openMenu.addEventListener('click', ()=>{
    openCloseMenu('block', 'hidden');
});

closeMenu.addEventListener('click', ()=>{
    openCloseMenu('hidden', 'block');
});