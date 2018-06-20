const express = require('express')
// const database = require('./src/database.js')

// MIDDLEWARES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ROUTES

app.get('/', (req, res) => {
  res.json('A SUCCESFUL FETCH')
})

app.listen(3030, () => console.log(`server listening on port: 3030`))
