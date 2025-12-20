type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

const books: Book[] = [];

/**
 * addBook(title, author, publicationYear): void
 * Adds a new book to the collection and logs a confirmation message.
 */
const addBook = (
  title: string,
  author: string,
  publicationYear: number
): void => {
  const newBook: Book = {
    title,
    author,
    publicationYear,
  };

  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
};

/**
 * listBooks(): void
 * Logs all stored books.
 */
const listBooks = (): void => {
  console.log('All Books:');

  for (const book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
};

/**
 * searchBook(title?): void
 * - If title is not provided, logs a prompt message.
 * - Otherwise, searches books by title substring (case-sensitive).
 */
const searchBook = (title?: string): void => {
  if (title === undefined) {
    console.log('Please provide a title to search.');
    return;
  }

  const results: Book[] = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);

  for (const book of results) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
};

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
