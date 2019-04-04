const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

console.log("Count books :" + repository.getTotalCount());
console.log("Total price :" + repository.getTotalPrice());