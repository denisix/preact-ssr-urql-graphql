const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { createServer } = require('http')
const process = require('process')

// ENVIRONMENT
const port = process.env.PORT || 3031
const PROD = process.env.NODE_ENV === 'production'

// IMPORTS
const { resolvers, typeDefs } = require('./schema')

const start = async () => {
  console.log('- started worker ')
  try {
    const apollo = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: !PROD,
      playground: !PROD
    })

    const app = express()
    apollo.applyMiddleware({ app })

    // FOR DEVELOPMENT
    if (!PROD) {
      app.use('/', express.static(__dirname + '../client/build'))
    }

    const server = createServer(app)
    apollo.installSubscriptionHandlers(server)

    server.listen({ port }, () => {
      console.log(`🚀 Server ready at http://0.0.0.0:${port}${apollo.graphqlPath}`)
      console.log(`🚀 Subscriptions ready at ws://0.0.0.0:${port}${apollo.subscriptionsPath}`)
    })
  } catch (e) {
    console.error('Error:', e.toString())
  }
}

start()
