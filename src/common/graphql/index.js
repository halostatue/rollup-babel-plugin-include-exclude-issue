import { loader } from 'graphql.macro'

export default {
  films: {
    all: loader('./films/all.graphql')
  }
}
