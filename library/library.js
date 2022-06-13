import { bookTile } from '../components/book-tile/book-tile.js';

const headerAndInputs = document.getElementById("headerAndInputs");
const sticky = headerAndInputs.offsetTop;
const main = document.getElementsByTagName('main')[0];

for(let i=0; i<30; i++){
    bookTile();
}

window.onscroll = () => setSticky();

window.onresize = () => {
    if(window.innerWidth > 768) {
        headerAndInputs.classList.remove("sticky");
        main.style.paddingTop = '0';
    }
};

function setSticky() {
    if (window.pageYOffset > sticky && window.innerWidth < 768) {
        headerAndInputs.classList.add('sticky');
        main.style.paddingTop = '90px';
    } else {
        headerAndInputs.classList.remove('sticky');
        main.style.paddingTop = '0';
    }
}