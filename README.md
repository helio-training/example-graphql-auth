<img src="http://i.imgur.com/UzC7XPe.png" alt="Helio Training" width="226" align="center"/> v1.0

---------------
# GraphQL Boilerplate - Monk

This repo provides a very simple starting point for creating a custom GraphQL service in Node. It
includes babel and gives you the ability to write in ES2015 Stage 2 along with Standard
JS linting. 

#### Installed Libraries

```text
babel-cli (node)
debug
eslint (JS Standard config)
express
graphql-server-express
lodash
mocha (sinon & chai as well)
monk
monk-middleware-debug
nodemon
```

## Installation
```sh
# Clone this repo (or fork into your own)
git clone https://github.com/helio-training/helio-graphql-boilerplate-monk.git graphql-project && cd graphql-project

# Using npm?
npm i && npm start

# Using yarn?
yarn install && yarn start
```

## Testing
Mocha is installed and utilizing `babel-register` for importing ES2015 modules.
Any js files put in the `./test` directory will be evaluated by Mocha when running:

```sh
# Using npm?
npm test

# Using yarn?
yarn test
```

## Base Structure
```sh
# Database driver initialization (Monk in this case)
./src/db/index.js

# Database connection strings for Monk to utilize
./src/db/connections.js

# Server initialization and graphql/graphiql endpoint setup
./src/index.js

# console replacement that utilizes Debug and exposes standard 
# 'console' functions for use
./src/logger.js

# Combination of GraphQL resolvers merged together to create 
# the single graphql resolver we need for schema
./src/resolvers.js

# The master schema file that returns an executable schema
# for the graphql package
./src/schema.js

# Folder where you should place the information for all of your
# GraphQL types. By convention create a folder that will
# allow you to split up your GraphQL pieces.
./src/graph
./src/graph/*type_name*/types.js # Types related to *type_name*
./src/graph/*type_name*/resolver.js # The resolver for this particular *type_name*
./src/graph/*type_name*/queries.js # The individual queries we expose for our graph
./src/graph/*type_name*/mutations.js # The individual mutations we expose for our graph
```

## Production Builds
We shouldn't use babel-node when serving our application in production. We need to
compile our ES2015 code into code node will understand without babel. 

In order to do this we can run:

```sh
# Using npm?
npm build

# Using yarn?
yarn build
```

This will create a folder (`/dist`) that you can run directly with node. A simple
server script is included as an example. This script requires you to have ran the 
above build script first.

```sh
# Using npm?
npm serve

# Using yarn?
yarn serve
```

## Roadmap

* Add subscription information and support
