/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config()
const mongoose = require('mongoose')


/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)


// Events for when connection opens/disconnects/errors
mongoose.connection
.on('open', () => console.log('We are in the building'))
.on('close', () => console.log('Mongo left the building'))
.on('error', (error) => console.log(error))

////////////////////////////////////////////////////
// Export the Connection
////////////////////////////////////////////////////
module.exports = mongoose

