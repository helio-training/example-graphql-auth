import { makeExecutableSchema } from 'graphql-tools'

// Our merged resolvers
import resolvers from './resolvers'

// Mutations
import UserMutations from './graph/user/mutations'
import VersionMutations from './graph/version/mutations'

// Queries
import UserQueries from './graph/user/queries'
import VersionQueries from './graph/version/queries'

// Types
import TokenType from './graph/token/types'
import UserType from './graph/user/types'
import VersionTypes from './graph/version/types'

const Root = `
  type Query {
    ${UserQueries}
    ${VersionQueries}
  }
  
  type Mutation {
    ${UserMutations}
    ${VersionMutations}
  }
`

export default makeExecutableSchema({
  typeDefs: [
    Root,
    TokenType,
    UserType,
    VersionTypes
  ],
  resolvers
})
