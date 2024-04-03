document.addEventListener(DOMContentLoaded ,() =>{


const navbar = document.getElementById('menu-toggle');
const navmenu = document.getElementById('menu');

navbar.addEventListener('click', () =>{
    navmenu.classList.toggle('hidden');
})
})