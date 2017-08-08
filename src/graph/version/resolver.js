/*
  To make our resolvers Monk accessible use the following example.

  Make sure you've edited the /src/db/connections.json before
  attempting this.

  import db from '../../db'

  const someCollection = db.get('someCollection')

  someCollection.find()|.findOne|.create()...
 */

let version = '1.0.0'

export default {
  Query: {
    async Version (_doc, _args, _context, _info) {
      return { number: version }
    }
  },

  Mutation: {
    async updateVersion (_doc, args, _context, _info) {
      version = args.number
      return { number: version }
    }
  }
}
