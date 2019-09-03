const { ApolloServer, gql } = require('apollo-server-koa')
const Koa = require('koa')
const app = new Koa()
const db = require('./service/db')

const typeDefs = gql(require('./graphql/typeDefs'))
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

module.exports = {
    run: async (port) => {
        await db.connect()
        await app.listen(port)
        console.log(`Server Listening http://localhost:${port}`)
    },
    app
}