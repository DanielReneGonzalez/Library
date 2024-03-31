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


addButton.addEventListener('click', () => {
    dialog.showModal();
    form.reset();
});

cancelButton.addEventListener('click', () => {
    dialog.close();
});

const form = document.querySelector('form');
const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function (event){
        const dialogTitle = document.getElementById('title').value;
        const dialogAuthor = document.getElementById('author').value;
        const dialogPages = document.getElementById('pages').value;
        const dialogRead = false;
        const newBook = new Book (dialogTitle, dialogAuthor, dialogPages, dialogRead); 
        if (dialogTitle === '') { 
            alert('Can not be a blank book title');
            event.preventDefault();
            stopPropagation();
        } if (dialogAuthor === '') {
            alert('Please add an Author');
            event.preventDefault();
            stopPropagation();
        } if (dialogPages === NaN) {
            event.preventDefault();
            stopPropagation();
        } else {
            addBookToLibrary(newBook);
            addBookToMain(newBook);
        };
       
    });


function addBookToMain() {
    const mainDiv = document.querySelector('.card');
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'mainInfo');
        bookDiv.value = myLibrary.length-1;
    const mainTitle = document.createElement('div');
    const mainAuthor = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readCheckBox = document.createElement('input');
        readCheckBox.type = 'checkbox';
        readCheckBox.className = 'readCheckBox';
        readCheckBox.name = 'Read';
        readCheckBox.value = 'read';
        const label = document.createElement('label');
        label.htmlFor = 'readCheckBox';
        label.appendChild (document.createTextNode('Read:'));
   
    const deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
    deleteButton.innerText = 'X';
    mainTitle.innerText = `Title: ${title.value}`;
    mainAuthor.innerText = `Author: ${author.value}`;
    pagesDiv.innerText = `Pages: ${pages.value}`;
    mainDiv.appendChild(bookDiv);
    bookDiv.appendChild(mainTitle);
    bookDiv.appendChild(mainAuthor);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readCheckBox);
    bookDiv.appendChild(label);
    bookDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
        e.target.value;
        myLibrary.splice(e.target.value,1)
        e.target.parentElement.remove()
    });
    readCheckBox.addEventListener('change', (e) => {
        if (e.target.checked){
            e.target.value;
            myLibrary[bookDiv.value].read = true
        } else {myLibrary[bookDiv.value].read = false}
    });
};

