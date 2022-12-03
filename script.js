// Add Book Form
// changing visibility
let addBookForm = document.querySelector(".addBookFormForm");
document.querySelector("#addBookButton").addEventListener("click", () => {
  if (addBookForm.style.display == "flex") addBookForm.style.display = "none";
  else addBookForm.style.display = "flex";
});

//Add Book
let libraryCollection = [];

//Book Object Constructor
function Book(title, pages, author, isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

//Submit Book
document.querySelector("#submitBook").addEventListener("click", (book) => {
  //Book Details
  let title = document.querySelector("#addBookTitle").value;
  let author = document.querySelector("#addBookAuthor").value;
  let pages = document.querySelector("#addBookPages").value;
  let isRead = false;

  if (document.querySelector("#addisBookRead").checked) {
    isRead = true;
  } else {
    isRead = false;
  }

  //If not empty
  if ((title !== "", pages !== "", author !== "")) {
    const newBook = new Book(title, pages, author, isRead);
    libraryCollection.push(newBook);
    displayBook();
  }
});

//book card container
let bookCards = document.querySelector(".bookCards");

function displayBook() {
  deleteLibrary(); //Reset Display Book

  // Loops the whole Array
  libraryCollection.forEach((book, bookIndex) => {
    //creates the individual book, adds class, and appends to card container
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCards.appendChild(bookCard);

    //creates the title, adds class, and appends to card container
    let bookTitle = document.createElement("div");
    bookTitle.classList.add("bookTitle");
    bookTitle.innerHTML = `<span>Title: </span> ${book.title}`;
    bookCard.appendChild(bookTitle);

    //creates the author, adds class, and appends to card container
    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.innerHTML = `<span>Author: </span> ${book.author}`;
    bookCard.appendChild(bookAuthor);

    //creates the pages, adds class, and appends to card container
    let bookPages = document.createElement("div");
    bookPages.classList.add("bookPages");
    bookPages.innerHTML = `<span>Pages: </span> ${book.pages}`;
    bookCard.appendChild(bookPages);

    //creates the book status, adds class, data attributes and appends to card container
    let bookIsRead = document.createElement("div");
    bookIsRead.classList.add("bookIsRead");
    bookIsRead.dataset.bookIsRead = bookIndex;
    //changes based on the boolean variable
    if (book.isRead) {
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

    //creates the remove book, adds class, data attributes and appends to card container
    let removeBook = document.createElement("div");
    removeBook.classList.add("removeBook");
    removeBook.dataset.removeBook = bookIndex;
    removeBook.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
</svg>Delete`;
    bookCard.appendChild(removeBook);
  });
}

//function to reset the book
function deleteLibrary() {
  bookCards.innerHTML = "";
}

//events for dynamically created elements
bookCards.addEventListener("click", (bookCard) => {
  //for change book status
  if (bookCard.target.classList.contains("bookIsRead")) {
    //changes book status to either true to false or false to true
    let bookID = bookCard.target.getAttribute("data-book-is-read");
    libraryCollection[bookID].isRead = !libraryCollection[bookID].isRead;
    displayBook();
  }
  //for remove book
  if (bookCard.target.classList.contains("removeBook")) {
    let bookID = bookCard.target.getAttribute("data-remove-book");
    //removes the book based on the book id
    libraryCollection.splice(bookID, 1);
    displayBook();
  }
});
