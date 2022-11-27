// Add Book Form
// changing visibility
let addBookForm = document.querySelector(".addBookFormForm");
document.querySelector("#addBookButton").addEventListener("click", () => {
  if (addBookForm.style.display == "flex") addBookForm.style.display = "none";
  else addBookForm.style.display = "flex";
});
