/*
  Add your logic here to initialize a service of your choice
 */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'

import logger from './logger'
import schema from './schema'

const app = express()
export const PORT = 3000

app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress((req) => ({
  schema,
  context: {
    token: req.header('authorization')
  }
})))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`)
  logger.info(`Access GraphiQL by navigating to: http://localhost:${PORT}/graphiql`)
})

export default app
