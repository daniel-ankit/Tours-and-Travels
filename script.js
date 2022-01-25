let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    packs.classList.remove('active');
}

let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    packs.classList.remove('active');
}

let packs = document.querySelector('.packs-container');
document.querySelector('#cart-btn').onclick = () =>{
    packs.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    packs.classList.remove('active');
}