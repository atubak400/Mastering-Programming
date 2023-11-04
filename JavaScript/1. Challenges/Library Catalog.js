/*Library Catalog
You are building a library catalog system, and you need to create a function to manage books in your library. The function is called manageLibrary.
The manageLibrary function takes three arguments:
		library - an object representing the library's catalog, where each book is represented as an object with properties like title, author, and checkedOut.
		action - a string that can be one of the following: "add", "remove", or "checkout".
		book - an object representing the book to be added, removed, or checked out.
The function should perform the following actions based on the action provided:
If action is "add," the function should add the book object to the library catalog.
If action is "remove," the function should remove the book object from the library catalog.
If action is "checkout," the function should update the checkedOut property of the specified book to true.
The function should return the updated library catalog after performing the action.
Here's an example of how the manageLibrary function should work:
*/

function manageLibrary(library, action, book) {
    if (action === "add") {
      // Generate a new key for the book
      const newKey = "book" + (Object.keys(library).length + 1);
      library[newKey] = book;
    } else if (action === "remove") {
      // Remove a book from the library catalog
      for (const key in library) {
        if (library[key] === book) {
          delete library[key];
          break; // Exit the loop after removal
        }
      }
    } else if (action === "checkout") {
      // Check out a book
      for (const key in library) {
        if (library[key] === book) {
          library[key].checkedOut = true;
          break; // Exit the loop after updating the book
        }
      }
    }
    return library;
  }
  
  // Example usage:
const libraryCatalog = {
  book1: { title: "Harry Potter", author: "J.K. Rowling", checkedOut: false },
  book2: { title: "To Kill a Mockingbird", author: "Harper Lee", checkedOut: true },
};

const newBook = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", checkedOut: false };

// Add a new book to the library catalog
const updatedLibrary1 = manageLibrary(libraryCatalog, "add", newBook);

// Remove a book from the library catalog
const updatedLibrary2 = manageLibrary(updatedLibrary1, "remove", libraryCatalog.book1);

// Check out a book
const updatedLibrary3 = manageLibrary(updatedLibrary2, "checkout", libraryCatalog.book2);

console.log(updatedLibrary3);