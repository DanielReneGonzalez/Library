const myLibray = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return [([this.title, 'by', this.author].join(" ")), this.pages, this.read].join(", ")
    };
};

function addBookToLibrary (book) {
    myLibray.push(book);
};

function displayTitle () {
    myLibray.forEach((Book) => {
        console.table(Book.title)
    });
}