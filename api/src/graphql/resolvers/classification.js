const { Classification, Book } = require('../../schema')

module.exports = {
    Classification: {
        books: (classification) => Book.find({ classificationid: classification._id })
    },
    Query: {
        classifications: (root, args, context, info) => {
            return Classification.find({})
        },
        classification: (root, args) => {
            return Classification.findOne(args)
        }
    },
    Mutation: {
        async addClassification(_, args, ctx, info) {
            let data = args
            let Classification = await Classification.findOne({ name: data.name })
            if (Classification) return new Error('Classification exists')
            return Classification.create(data)
        }
    }
}
