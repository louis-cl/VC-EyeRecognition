const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const app = express()

app.use(logger('dev'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const pool = new Pool({
  user: 'vcapp',
  password: 'sup3rs3cur3', 
  host: 'myvcdb.ctbwuvmxzmvp.eu-west-2.rds.amazonaws.com',
  database: 'dbvc', 
  port: 5432, 
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
})

app.get('/next', (req, res, next) => {
  pool.query('SELECT * FROM labeling WHERE classified = false LIMIT $1', [1])
    .then(dbr => {
        if (dbr.rows.length > 0)
          res.status(200).send(dbr.rows[0])
        else
          res.status(200).send({})
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/:id', (req, res, next) => {
  pool.query('SELECT * FROM labeling WHERE id = $1', [req.params.id])
    .then(dbr => {
        if (dbr.rows.length > 0)
          res.status(200).send(dbr.rows[0])
        else
          res.status(200).send({})
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('/', (req, res, next) => {
  pool.query('SELECT * FROM labeling')
    .then(dbr => {
        res.status(200).send(dbr.rows)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.post('/', (req, res) => {
  const { id, looking } = req.body
  pool.query('UPDATE labeling SET looking = $1, classified = true WHERE id = $2 RETURNING *', [looking, id])
    .then(dbr => {
      res.status(200).send(dbr.rows)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
})

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(3000, function() {
  console.log('Server is running on port 3000')
})