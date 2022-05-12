export function bookTile(id='') {
    
    let book = document.createElement('div');
    book.innerHTML = `
    <div class="bt-inner-container ">
    <div class="bt-image">
        <ion-icon name="book-outline"></ion-icon>
    </div>
    <div class="bt-stars">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-half"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
    </div>
    <div>
        Jan Kowalski
    </div>
    <div class="bt-title">
        Lorem Ipsum
    </div>
    <div class="bt-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
</div>
    `;
    if(id.length){
        document.getElementById(id).appendChild(book);
    } else {
        document.getElementsByClassName('bt-container')[0].appendChild(book);
    }
}