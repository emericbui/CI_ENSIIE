const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

/*
repository.save({
    'id' : 1,
    "name" :"Harry Potter",
    'price' :6.66,
    "added_at" : '2019-01-01'
});
repository.save({
    'id' : 2,
    "name" :"Harry Potter",
    'price' :6.66,
    "added_at" : '2019-02-01'
});
repository.save({
    'id' : 3,
    "name" :"Harry Potter",
    'price' :6.66,
    "added_at" : '2019-02-01'
});
repository.save({
    'id' : 4,
    "name" :"Harry Potter",
    'price' :6.66,
    "added_at" : '2019-03-01'
});
repository.save({
    'id' : 5,
    "name" :"Harry Potter",
    'price' :6.66,
    "added_at" : '2019-02-15'
});
repository.save({
    'id' : 6,
    "name" :"Harry Potter",
    'price' :6.66,
    "added_at" : '2019-02-16'
});
repository.save({
    'id' : 7,
    "name" :"Coco",
    'price' :6.66,
    "added_at" : '2019-12-17'
});
repository.save({
    'id' : 8,
    "name" :"Harry",
    'price' :6.66,
    "added_at" : '2019-12-17'
});
*/

console.log(repository.getTotalCount());
console.log(repository.getTotalPrice());
console.log(repository.getBookByName("Coco"));
console.log(repository.getCountBookAddedByMonth("Harry Potter"));