const myLibrary = [];

function Book(name, read) {
  // the constructor...
  this.name = name;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book); 
}

function displayBooks() {
    const booksDisplay = document.querySelector('#booksDisplay')
    for (book in myLibrary) {
        booksDisplay.innerHTML += "<tr><td>" + book.name + "</td></tr>"
    }
}