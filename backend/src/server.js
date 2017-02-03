import express from 'express'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'

let SPACEKEEP_DB_URI = 'mongodb://localhost:27017/spacekeep'

let server = express()

mongoose.connect(SPACEKEEP_DB_URI,(err)=>{
  if (err) console.log(err)
  else console.log('Connect to MongoDB at "'+SPACEKEEP_DB_URI+'" Successful')
})

server.use('/',graphqlHTTP({
  schema: schema,
  graphql: true
}))

server.listen(4000,(err)=>{
  if (err) console.log(err)
  else console.log('Starting Server at 4000...')
})
