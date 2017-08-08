// Lokka requires this
import 'babel-polyfill'

import Chai from 'chai'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'

import graphQLServer, { PORT } from '../src'

const { expect } = Chai

const client = new Lokka({
  transport: new Transport(`http://localhost:${PORT}/graphql`)
})

describe('Boilerplate Index File', () => {
  const queryVersionNumber = () => client.query(`
    {
      Version {
        number
      }
    }
  `)

  const updateVersionNumber = (number) => client.mutate(`
    ($number: String!) {
      updateVersion (number: $number) {
        number
      }
    }
  `, { number })

  it('Should return a version number when passed the Version query asking for a number', done => {
    queryVersionNumber().then((resp) => {
      expect(resp).to.deep.equal({ Version: { number: '1.0.0' } })
      done()
    }).catch(err => {
      done(err)
    })
  })

  it('Should update the version number when passed the mutation `updateVersion(number)`', done => {
    updateVersionNumber('2.0.0').then((resp) => {
      expect(resp).to.deep.equal({ updateVersion: { number: '2.0.0' } })
      done()
    }).catch(err => {
      done(err)
    })
  })
})
