// get the path module
const path = require('path');

// return the routing to server.js
module.exports = function (app) {
	// get the notes.html
	app.get('/notes', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});

	// If no matching route is found default to home
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};
