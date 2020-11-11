let myLibrary = [];



const libraryContainer = document.querySelector('.library');


function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

/****************************************
 * Modal button popup form
 ***************************************/

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}