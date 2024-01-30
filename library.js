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
    booksDisplay.innerHTML += "<tr><th>Book Title</th><th>Book Author</th><th>Book Pages</th><th>Book Read</th><th></th></tr>"
    myLibrary.forEach((value, index) => {
        booksDisplay.innerHTML += '<tr id="' + index + '"><td>' + value.title + "</td><td>" + value.author + "</td><td>" + value.pages + '</td><td><button onclick=toggle(' + index + ')>' + value.read + '</td><td><button onclick="deleteBook(' + index + ')">X</button></tr>'
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    displayBooks()
}

function toggle(index) {
    if (myLibrary[index].read == 'true')
        myLibrary[index].read = 'false'
    else
        myLibrary[index].read = 'true'
    displayBooks()
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

    if (title.value == '' || author.value == '' || pages.value == '' || read.value == '') {
        document.getElementById("error").innerHTML = ''
        document.getElementById("error").innerHTML += 'Please fill out all the fields<br>'
    }
    else {
        title.value = ''
        author.value = ''
        pages.value = ''
        read.value = ''
        document.getElementById("error").innerHTML = ''
        addBookToLibrary(book)
        $('#myModal').modal('toggle')
    }
});