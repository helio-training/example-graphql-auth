/*
  This boilerplate is configured to use Monk out of the gate,
  but feel free to setup and export your own favorite db
  library in here.

  Make sure you change the monkUrl found in connections.json
  to one that matches your own setup.
 */
import connections from './connections.json'
import monk from 'monk'
import monkDebug from 'monk-middleware-debug'

const db = monk(connections.monkUrl)

// Add more monk middleware here if needed
db.addMiddleware(monkDebug)

export default db
