import { id as ObjectId } from 'monk'
import db from '../../db'
import bcrypt from 'bcrypt'
import logger from '../../logger'
import jwt from 'jsonwebtoken'

const users = db.get('users')
const salt = '$2a$10$XBtyhdAJUldL3iQ76vw5ze'

export default {
  Query: {
    async User (_doc, args, _context, _info) {
      try {
        const someUsers = await users.findOne({ _id: ObjectId(args._id) })
        return someUsers
      } catch (e) {
        throw e
      }
    },

    async user (_doc, _args, context, _info) {
      try {
        const decodedToken = jwt.verify(context.token, salt)
        const user = await users.findOne({ _id: ObjectId(decodedToken.data._id) }, '-hashedPassword')
        logger.info('Found user!')
        logger.info(user)
        return user
      } catch (e) {
        throw e
      }
    }
  },

  Mutation: {
    async createUser (_doc, args, _context, _info) {
      try {
        const newUser = await users.insert({
          email: args.email,
          hashedPassword: await bcrypt.hash(args.password, salt)
        })
        return newUser
      } catch (e) {
        throw e
      }
    },

    async loginUser (_doc, args, _context, _info) {
      try {
        const foundUser = await users.findOne({
          email: args.email,
          hashedPassword: await bcrypt.hash(args.password, salt)
        }, '-hashedPassword')

        if (!foundUser) {
          return { token: null }
        }

        return { token: jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: foundUser
        }, salt) }
      } catch (e) {
        throw e
      }
    }
  }
}
