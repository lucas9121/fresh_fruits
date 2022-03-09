/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config() // Load ENV Variables into process.env
const express = require('express') // import express
const morgan = require('morgan') //import morgan
const methodOverride = require('method-override')
const fruitController = require('./controllers/fruits')
const path = require('path') // built in node module we use to resolve paths


/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan('tiny')) //logging
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use('/fruits', fruitController)

app.get('/', (req, res) => {
    res.send('Your server is running... You better go catch it')
})



//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`)
})
