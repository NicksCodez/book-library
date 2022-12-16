const addBook = document.querySelector(".header-buttons > button");
const closeForm = document.querySelector(".form-cancel");

addBook.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#form").classList.add("active");
});

closeForm.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#form").classList.remove("active");
});


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  Book.prototype.info = function () {
      return this.read
        ? `${this.title} by ${this.author}, ${this.pages} pages, read.`
        : `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
  }
  
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
  
  console.log(theHobbit.info());
  