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

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;  
}

function addBook(e) {
  e.preventDefault(); //Prevents page refresh from form submit
  let name = document.querySelector('#name').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#number').value;
  
  let book = new Book(name, author, pages);
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
let i = 0;

function addToLibrary() {
  removeAllChildNodes(library);  
  myLibrary.forEach(book => {  
    const libraryCard = document.createElement('div');
    libraryCard.classList.add('card'); 
    libraryCard.setAttribute('data-att', `${myLibrary.indexOf(book)}`);   
   
    const name = document.createElement('p');
    name.textContent = 'Name: ' + book.name;
    name.classList.add('bookCardElement');
   
    const author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;
    author.classList.add('bookCardElement');
   
    const pages = document.createElement('p');
    pages.textContent = 'Pages: ' + book.pages;
    pages.classList.add('bookCardElement');  
   
    const readDeleteDiv = document.createElement('div');
    readDeleteDiv.classList.add('readDeleteDiv')
    
    const readBtn = document.createElement('button');
    readBtn.classList.add('readBtn');
    readBtn.textContent = 'Read';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {    
      i = +libraryCard.dataset.att; // Assigning value to i for array position
      deleteCard()
    })

    libraryCard.appendChild(name);
    libraryCard.appendChild(author);
    libraryCard.appendChild(pages);
    
    readDeleteDiv.appendChild(readBtn);
    readDeleteDiv.appendChild(deleteBtn);
    libraryCard.appendChild(readDeleteDiv)

    library.appendChild(libraryCard)
  })
}

//Clears library node before forEach is executed on array
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

//Deletes node/libraryCard
function deleteCard() {
  console.log(i);
  myLibrary.splice(i, 1);
  addToLibrary()
}