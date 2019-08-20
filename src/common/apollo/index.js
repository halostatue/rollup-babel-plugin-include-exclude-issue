import Vue from 'vue'
import VueApollo from 'vue-apollo'

import { ApolloClient } from 'apollo-client'
import fetch from 'unfetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

import globals from '@common/globals'
import introspectionQueryResultData from './fragmentTypes.js'

Vue.use(VueApollo)

const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData })

const httpLink = createHttpLink({ uri: 'http://graphql.org/swapi-graphql/', fetch: fetch })
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({ headers: { authorization: globals.authToken } })
  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ fragmentMatcher }),
  connectToDevTools: true
})

export default new VueApollo({
  defaultClient: apolloClient
})
