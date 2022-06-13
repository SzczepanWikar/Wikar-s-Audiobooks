import { bookTile } from '../components/book-tile/book-tile.js';

const headerAndInputs = document.getElementById("headerAndInputs");
const sticky = headerAndInputs.offsetTop;
const main = document.getElementsByTagName('main')[0];

setSticky();

for(let i=0; i<3; i++){
    bookTile('premiers');
}

for(let i=0; i<3; i++){
    bookTile('bestsellers');
}

for(let i=0; i<20; i++){
    bookTile('other');
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