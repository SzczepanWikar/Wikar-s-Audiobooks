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
  new Book(
    "Matt Ridley",
    "How to innovation works",
    "assets/covers/matt-ridley-H-LIL57PHCc-unsplash-edited.jpg"
  ),
  new Book(
    "Paul Jarvis",
    "Company of One. Why staing small is next big thing for buisness.",
    "assets/covers/surja-sen-das-raj-ViMrMawjj7s-unsplash-edited.jpg"
  ),
  new Book(
    "Oscar Wilde",
    "Picture of the Dortain Gray",
    "assets/covers/tim-alex-1i-P178kxHQ-unsplash-edited.jpg"
  ),
];

export function bookTile(id = "") {
  let bookContainer = document.createElement("div");
  const book = books[~~(books.length * Math.random())];
  bookContainer.innerHTML = `
        <div ${
          !id.length
            ? 'onclick="location.href=' + "'listening.html'" + ';"'
            : ""
        }  class="bt-inner-container ">
            <img class="bt-image"alt="${book.author + " " + book.title}" src="${
    book.cover
  }">
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
  if (id.length) {
    document.getElementById(id).appendChild(bookContainer);
  } else {
    document
      .getElementsByClassName("bt-container")[0]
      .appendChild(bookContainer);
  }
}
