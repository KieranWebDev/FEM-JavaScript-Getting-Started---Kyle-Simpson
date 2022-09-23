// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];
function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
  }
}

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");
console.log(favoriteBooks);

// TODO: print out favorite books
// function printFavoriteBooks() {
//   return `favorite books ${favoriteBooks.length}`;
// }
// printFavoriteBooks();

function printFavoriteBooks() {
  for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(`favorite book: ${favoriteBooks[i]}`);
  }
}
console.log(printFavoriteBooks());
