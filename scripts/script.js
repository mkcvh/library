let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("Harry Potter", "JK Rowling", 572, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 240, true);
update();
function render(obj) {
   let table = document.querySelector("table");
    let row = document.createElement("tr");
    for (let i in obj) {
        let dataCell = document.createElement("td");
        let dataText = document.createTextNode(obj[i]);
        dataCell.appendChild(dataText);
        row.appendChild(dataCell);
    }
    let deleteCell = document.createElement("td");
    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerHTML = "x";
    deleteBtn.addEventListener("click", function() {
        let index = myLibrary.indexOf(obj);
        myLibrary.splice(index, 1);
        update();
    })
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);
    table.appendChild(row);
}

document.getElementById("addBookButton").addEventListener("click", function(){ addBookToLibrary(document.getElementById('bookTitle').value, document.getElementById('bookAuthor').value,  parseInt(document.getElementById('bookPages').value), true );
document.querySelector(".addBook").style.visibility = "hidden";
update();}
);

function update() {
    let table = document.querySelector("table");
    table.innerHTML = "";
    let header = document.createElement("tr");
    let headerItems = ["Title", "Author", "Pages", "Read?"];
    for (let i in headerItems) {
        let headerCell = document.createElement("th");
        let headerText = document.createTextNode(headerItems[i]);
        headerCell.appendChild(headerText);
        header.appendChild(headerCell);
    }
    table.appendChild(header);
    for (let objIndex in myLibrary) {
        render(myLibrary[objIndex]);
    }
}

document.getElementById("toggleForm").addEventListener("click", function(){
    document.querySelector(".addBook").style.visibility = "visible";
})