// Add Book Form
// changing visibility
let addBookForm = document.querySelector(".addBookFormForm");
document.querySelector("#addBookButton").addEventListener("click", () => {
  if (addBookForm.style.display == "flex") addBookForm.style.display = "none";
  else addBookForm.style.display = "flex";
});

//Add Book
let libraryCollection = [];

function submitBook(title, pages, author, isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

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

  submitBook(title, pages, author, isRead);
});
