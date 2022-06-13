class Book {
    author;
    title;
    cover;

    constructor(author, title, cover) {
        this.author = author;
        this.title = title;
        this.cover = cover;
    }
}
const books = [
    new Book('Matt Ridley', 'How to innovation work', '../assets/covers/matt-ridley-H-LIL57PHCc-unsplash-edited.jpg'),
    new Book('Paul Jarvis', 'Company of one', '../assets/covers/surja-sen-das-raj-ViMrMawjj7s-unsplash-edited.jpg'),
    new Book('Oscar Wilde', 'Picture of the Dortain...', '../assets/covers/tim-alex-1i-P178kxHQ-unsplash-edited.jpg'), // I know I should use CSS to hide it, but it only need to look good.
];

export function bookTile(id='') {
    
    let bookContainer = document.createElement('div');
    const book = books[~~(books.length*Math.random())];
    bookContainer.innerHTML = `
        <div class="bt-inner-container ">
            <div class="bt-image">
                <img height="300px" src=${book.cover}>
            </div>
            <div class="bt-stars">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
            <div>
                ${book.author}
            </div>
            <div class="bt-title">
                ${book.title}
            </div>
        </div>
    `;
    if(id.length){
        document.getElementById(id).appendChild(bookContainer);
    } else {
        document.getElementsByClassName('bt-container')[0].appendChild(bookContainer);
    }
}