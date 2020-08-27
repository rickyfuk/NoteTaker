// get the express module
const express = require('express');

const app = express();

// set the port as either assign by heroku or 8080 in local
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// map the router js
require('./router/apiRoute')(app);
require('./router/htmlRoute')(app);

// add the port listener
app.listen(PORT, function () {
	console.log(`App listening on PORT:${PORT}`);
});
