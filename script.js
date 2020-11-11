let myLibrary = [];
const libraryContainer = document.querySelector('.library');

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

function addBook(e) {
  e.preventDefault();
  let book = {
      name: document.querySelector('#name').value,
      author: document.querySelector('#author').value,
      pages: document.querySelector('#number').value,
      read: document.querySelector('#read').value
  };   
  myLibrary.push(book);
  document.querySelector('#name').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#number').value = '';
  document.querySelector('#read').value = '';
  modal.style.display = "none";
}

/****************************************************
 * Create library cards *
 ****************************************************/

 