import { bookTile } from '../components/book-tile/book-tile.js';

for(let i=0; i<4; i++){
    bookTile('premiers');
}

for(let i=0; i<4; i++){
    bookTile('bestsellers');
}

for(let i=0; i<18; i++){
    bookTile('other');
}
const more = document.createElement('a');
more.innerHTML = "<a >Więcej...</a>"
document.getElementById('other').appendChild(more)