class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.books.length + 1 > this.capacity){
            throw new Error('Not enough space in the collection.');
        }

        let bookObj = { bookName, bookAuthor, payed: false };
        this.books.push(bookObj);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName){
        let book = this.books.filter(b => b.bookName === bookName)[0];

        if(!book){
            throw new Error(`${bookName} is not in the collection.`);
        }

        if(book.payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        let book = this.books.filter(b => b.bookName === bookName)[0];

        if(!book){
            throw new Error("The book, you're looking for, is not found.");
        }

        if(!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let bookIdx = this.books.indexOf(book);
        this.books.splice(bookIdx, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){

        let result = [];

        if(!bookAuthor){
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            
            this.books
            .sort((a, b) => a.bookName.toLowerCase().localeCompare(b.bookName.toLowerCase()))
            .forEach(el => {
                let paidResult = el.payed ? 'Has Paid' : 'Not Paid';
                let bookResult = `${el.bookName} == ${el.bookAuthor} - ${paidResult}.`;
                result.push(bookResult);
            });

            return result.join('\n');
        }

        let book = this.books.filter(b => b.bookAuthor === bookAuthor)[0];

        if(!book){
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        let paidResult = book.payed ? 'Has Paid' : 'Not Paid';
        return `${book.bookName} == ${book.bookAuthor} - ${paidResult}.`;
    }
}

const library = new LibraryCollection(2) 

console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.getStatistics('Marcel Proust'));