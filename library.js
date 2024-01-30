const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks()
}

function displayBooks() {
    const booksDisplay = document.querySelector('#booksDisplay')
    booksDisplay.innerHTML = ""
    booksDisplay.innerHTML += "<tr><th>Book Title</th><th>Book Author</th><th>Book Pages</th><th>Book Read</th></tr>"
    myLibrary.forEach(function (book) {
        booksDisplay.innerHTML += "<tr><td>" + book.title + "</td><td>" + book.author + "</td><td>" + book.pages + "</td><td>" + book.read + "</td</tr>"
    });
}

const bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // handle submit
    let title = document.getElementById("book-title")
    let author = document.getElementById("book-author")
    let pages = document.getElementById("book-pages")
    let read = document.getElementById("book-read")

    let book = new Book(title.value, author.value, pages.value, read.value)

    if(title.value == '' || author.value == '' || pages.value == '' || read.value == ''){
        document.getElementById("error").innerHTML += 'Please fill out all the fields<br>'
    }
    else{
        document.getElementById("error").innerHTML = ''
    addBookToLibrary(book)
    }
});