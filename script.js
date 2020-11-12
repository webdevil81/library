/***************************************************
 * Modal button popup form *
 ***************************************************/

const modalBtn = document.querySelector("#modal-btn")
const modal = document.querySelector(".modal")
const submitBtn = document.querySelector('.submit-btn');
const closeBtn = document.querySelector(".close-btn")

modalBtn.addEventListener('click', () => { modal.style.display = "block";})
submitBtn.addEventListener('click', addBook);
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
})

function closeModal(e) {
  modal.style.display = "none";
  e.preventDefault(); 
}

/****************************************************
 * Modal form values to objects and pushed to array *
 ****************************************************/

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(e) {
  e.preventDefault(); //Prevents page refresh from form submit
  let name = document.querySelector('#name').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#number').value;
  let read = document.querySelector('#read').value;
  let book = new Book(name, author, pages, read);
  myLibrary.push(book);
  addToLibrary();
  document.querySelector('.inputField').value = '';
  modal.style.display = "none";
}
  /*
  //EXAMPLE OF CREATING BOOK OBJECTS WITHOUT CONSTRUCTOR
  let book = {
      name: document.querySelector('#name').value,
      author: document.querySelector('#author').value,
      pages: document.querySelector('#number').value,
      read: document.querySelector('#read').value
  };   
  */

/****************************************************
 * Create library cards *
 ****************************************************/

const library = document.querySelector('.library');

function addToLibrary() {
  removeAllChildNodes(library);  
  myLibrary.forEach(book => {  
    const libraryCard = document.createElement('div');
    libraryCard.classList.add('card'); 
    const name = document.createElement('p');
    name.textContent = book.name;
    name.classList.add('bookCardElement');
    const author = document.createElement('p');
    author.textContent = book.author;
    author.classList.add('bookCardElement');
    const pages = document.createElement('p');
    pages.textContent = book.pages;
    pages.classList.add('bookCardElement');
    const read = document.createElement('p');
    read.textContent = book.read;
    read.classList.add('bookCardElement');

    libraryCard.appendChild(name);
    libraryCard.appendChild(author);
    libraryCard.appendChild(pages);
    libraryCard.appendChild(read);
    library.appendChild(libraryCard)
  })
}

//Clears library node before forEach is executed on array
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

