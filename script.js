const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info= function() {
        return [([this.title, 'by', this.author].join(" ")), this.pages, this.read].join(", ")
    };
};

function addBookToLibrary (book) {
    myLibrary.push(book);
};

function displayTitle () {
    myLibrary.forEach((Book) => {
        console.table(Book.title)
    });
}

// For popup when add book is pressed

const addButton = document.getElementById('addBookButton');
const cancelButton = document.getElementById('cancel');
const dialog = document.getElementById('newBookDialog');

function openCheck (dialog) {
    if (dialog.open) {
        return 'dialog open';
    } else {
        return 'dialog closed';
    }
};

addButton.addEventListener('click', () => {
dialog.showModal();
openCheck(dialog);
});

cancelButton.addEventListener('click', () => {
    dialog.close();
    openCheck(dialog);
});

const form = document.querySelector('form');
const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function getBook (){
        const dialogTitle = document.getElementById('title').value;
        const dialogAuthor = document.getElementById('author').value;
        const dialogPages = document.getElementById('pages').value;
        const dialogRead = document.getElementById('read').value;
        const newBook = new Book (dialogTitle, dialogAuthor, dialogPages, dialogRead);
        addBookToLibrary(newBook)
        addBookToMain(newBook)
    });


function addBookToMain() {
    const mainDiv = document.querySelector('.card');
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'mainInfo');
    const mainTitle = document.createElement('div');
    const mainAuthor = document.createElement('div');
    const pagesDiv = document.createElement('div');
    mainTitle.innerText = `Title: ${title.value}`
    mainAuthor.innerText = `Author: ${author.value}`
    pagesDiv.innerText = `Pages: ${pages.value}`
    mainDiv.appendChild(bookDiv);
    bookDiv.appendChild(mainTitle);
    bookDiv.appendChild(mainAuthor);
    bookDiv.appendChild(pagesDiv);
}

// Sidebar book list

// function addBookSideBar() {
//     const booksidebar = document.querySelector('#book');
//     const bookDiv = document.createElement('div');
//     bookDiv.textContent += document.getElementById('title').value;
//     booksidebar.appendChild(bookDiv);
    
// };
function checkTitle() {
    const title1 = document.getElementById('title').value;
    if (myLibrary.includes(title1)) {
        alert('Book in catalog already.');
        title1.focus();
    }
}

// When book is clicked, Main infomation


// const showInfoMain = document.querySelector('#book');
// const mainDiv = document.querySelector('.card');
//     showInfoMain.addEventListener('click', function showInfo(){
//         mainDiv.innerHTML="";
//         const text = clickTitle();
//         const mainInfo = document.createElement('div');
//         mainInfo.setAttribute('class', 'mainInfo');
//         const mainTitle = document.createElement('div');
//         const mainAuthor = document.createElement('div');
//         const pages = document.createElement('div');
//         mainTitle.innerText = `Title: ${text}`;
//         mainAuthor.innerText = 'Author:';
//         pages.innerText = 'Pages:';
//         mainDiv.appendChild(mainInfo);
//         mainInfo.appendChild(mainTitle);
//         mainInfo.appendChild(mainAuthor);
//         mainInfo.appendChild(pages);
//     })


     
    /*function Book (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function() {
            return [([this.title, 'by', this.author].join(" ")), this.pages, this.read].join(", ")
        };*/