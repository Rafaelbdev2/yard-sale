const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAsideMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')   
}


function toggleMobileMenu() {
    /*const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        mobileMenu.classList.add('inactive')
    }
    */
    mobileMenu.classList.toggle('inactive')   
}


function toggleAsideMenu() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive'); // Inactiva el menu Mobile
        aside.classList.add('inactive'); // Inactiva el menu del Email 
    }
    
    aside.classList.toggle('inactive');    

}