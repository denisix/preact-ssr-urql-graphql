const { merge } = require('lodash')
const { PubSub } = require('graphql-subscriptions')

const Item = require('./SDL/Item.js')

const pubsub = new PubSub()
const SUB_TEST = 't'

const defType = `
  type Query {
    _empty: String
	  ok: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
	  _empty: String
	  test: String
  }

  scalar Date
`

const defResolver = {
  Query: {
    ok: () => 'OK'
  },
  Subscription: {
    test: {
      subscribe: () => pubsub.asyncIterator(SUB_TEST)
    }
  }
}

setInterval(() => pubsub.publish(SUB_TEST, { test: 'Hello!' }), 2000)

module.exports = {
  resolvers: merge(
    defResolver,
    Item.resolver,
  ),
  typeDefs: [
    defType,
    Item.type,
  ]
}
