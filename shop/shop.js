import { bookTile } from '../components/book-tile/book-tile.js';

const headerAndInputs = document.getElementById("headerAndInputs");
const sticky = headerAndInputs.offsetTop;
const main = document.getElementsByTagName('main')[0];

for(let i=0; i<5; i++){
    bookTile('premiers');
}

for(let i=0; i<6; i++){
    bookTile('bestsellers');
}

for(let i=0; i<20; i++){
    bookTile('other');
}
window.onscroll = () => {
    if (window.pageYOffset > sticky && window.innerWidth < 768) {
        headerAndInputs.classList.add("sticky");
        main.style.paddingTop = '90px';
    } else {
        headerAndInputs.classList.remove("sticky");
        main.style.paddingTop = '0';

    }
};

window.onresize = () => {
    if(window.innerWidth > 768) {
        headerAndInputs.classList.remove("sticky");
        main.style.paddingTop = '0';
    }
};
