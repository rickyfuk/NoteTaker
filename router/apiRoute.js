// load the fs modual
const fs = require('fs');

// return the routing to server.js
module.exports = function (app) {
    const dataPath = './db/db.json';
    // get the data from the database
	app.get('/api/notes', (req, res) => {
		fs.readFile(dataPath, (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
    });
    
};
