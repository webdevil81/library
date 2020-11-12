/***************************************************
 * Modal button popup form *
 ***************************************************/

const modalBtn = document.querySelector("#modal-btn")
const modal = document.querySelector(".modal")
const submitBtn = document.querySelector('.submit-btn');
const closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
submitBtn.addEventListener('click', addBook);
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

/****************************************************
 * Modal form values to objects and pushed to array *
 ****************************************************/

let myLibrary = [];

function addBook(e) {
  e.preventDefault(); //Prevents page refresh from form submit
  let book = {
      name: document.querySelector('#name').value,
      author: document.querySelector('#author').value,
      pages: document.querySelector('#number').value,
      read: document.querySelector('#read').value
  };   
  myLibrary.push(book);
  //Clears input dields
  document.querySelector('#name').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#number').value = '';
  document.querySelector('#read').value = '';
  modal.style.display = "none";
  addToLibrary();
}

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

