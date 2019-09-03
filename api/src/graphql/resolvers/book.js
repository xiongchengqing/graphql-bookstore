const { Book, Classification } = require('../../schema')

module.exports = {
    Book: {
        classification: (book)=> Classification.findOne({_id: book.classificationId})
    },
    Query: {
        books: (root, args, context, info) => {
            return Book.find({})
        },
        book: (root, args) => {
            return Book.findOne(args)
        }
    },
    Mutation: {
        addBook(_, args) {
            let data = args
            return Book.create(data)
        }
    }
}