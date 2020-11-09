let myLibrary = ['Book1', 'Book2'];

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
        libraryContainer.appendChild(newBook);
    })
}

addToPage();
//addToMyLibrary();