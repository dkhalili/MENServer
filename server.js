const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Server API"});
});

require('./app/routes/user.routes.js')(app);
// require('./app/routes/listing.routes.js')(app);
// require('./app/routes/broker.routes.js')(app);
// require('./app/routes/message.routes.js')(app);

// listen for requests
app.listen(4040, () => {
    console.log("Server is listening on port 4040");
});