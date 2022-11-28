// Add Book Form
// changing visibility
let addBookForm = document.querySelector(".addBookFormForm");
document.querySelector("#addBookButton").addEventListener("click", () => {
  if (addBookForm.style.display == "flex") addBookForm.style.display = "none";
  else addBookForm.style.display = "flex";
});

//Add Book
let libraryCollection = [];

function Book(title, pages, author, isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

//Add Book
document.querySelector("#submitBook").addEventListener("click", () => {
  let title = document.querySelector("#addBookTitle").value;
  let pages = document.querySelector("#addBookAuthor").value;
  let author = document.querySelector("#addBookPages").value;
  let isRead = false;
  if (document.querySelector("#addisBookRead").checked) {
    isRead = true;
  } else {
    isRead = false;
  }

  const newBook = new Book(title, pages, author, isRead);
  libraryCollection.push(newBook);
  displayBook();
});

function displayBook() {
  let lastBook = libraryCollection[libraryCollection.length - 1];
  const bookCards = document.querySelector(".bookCards");

  let bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCards.appendChild(bookCard);

  let bookTitle = document.createElement("div");
  bookTitle.classList.add("bookTitle");
  bookTitle.innerHTML = `<span>Title: </span> ${lastBook.title}`;
  bookCard.appendChild(bookTitle);

  let bookAuthor = document.createElement("div");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.innerHTML = `<span>Author: </span> ${lastBook.author}`;
  bookCard.appendChild(bookAuthor);

  let bookPages = document.createElement("div");
  bookPages.classList.add("bookPages");
  bookPages.innerHTML = `<span>Author: </span> ${lastBook.pages}`;
  bookCard.appendChild(bookPages);

  let bookIsRead = document.createElement("div");
  bookIsRead.classList.add("bookIsRead");
  if (lastBook.isRead) {
    bookIsRead.innerHTML = `<svg
                style="width: 24px; height: 24px"
                viewBox="0 0 24 24"
                class="checkMark"
              >
                <path
                  fill="currentColor"
                  d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z"
                />
              </svg>
              Read`;
    bookIsRead.classList.remove("bookNotRead");
  } else {
    bookIsRead.innerHTML = "Not Read";
    bookIsRead.classList.add("bookNotRead");
  }
  bookCard.appendChild(bookIsRead);

  let removeBook = document.createElement("div");
  removeBook.classList.add("removeBook");
  removeBook.innerHTML = `<svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
                />
              </svg>`;
  bookCard.appendChild(removeBook);
}
