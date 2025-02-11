// Book Constructor

function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Construction
function UI(){}

// Add Book To List

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');

    // Insert cols

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class="delete">X</a></td>
        `
    ;  

    list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function(message, className){

    //get the list
    const list = document.querySelector('#book-form');
    // Create div
    const div = document.createElement('div');

    //Add classes
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));

    //Get parent
    const container = document.querySelector('.container');

    //Get from
    // const form = document.querySelector('#book-form');

    console.log(container);
    //Insert alert
    container.insertBefore(div, list);

    //Timeout after 3 sec

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners

document.getElementById('book-form').addEventListener('submit',
function(e){
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

        //Instantiate book
        const book = new Book(title, author, isbn);

        //Instantiate UI
        const ui = new UI();

        // Validate
        if(title === '' || author === '' || isbn === ''){
            // Error alert
            ui.showAlert('Please fill in all field', 'error');
        }else{
            // Add book to list
            ui.addBookToList(book);

            // Show success
            ui.showAlert('Book Added!', 'success');

            // Clear Fileds
            ui.clearFields();
        }

        e.preventDefault();
}
);

//Event Listener for delete

document.getElementById('book-list').addEventListener('click', function(e){
    //Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    // Show message

    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
});
