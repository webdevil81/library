let myLibrary = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6'];

const libraryContainer = document.querySelector('.library');


function addToMyLibrary() {
    myLibrary.push(prompt('Enter name of book'));
    libraryContainer.textContent = '';
    addToPage();
}

function addToPage() {
    myLibrary.forEach(book => {
        
        const newBook = document.createElement('p');
        newBook.textContent = book;
        newBook.classList.add('books');
        libraryContainer.appendChild(newBook);
    })
}

addToPage();
//addToMyLibrary();