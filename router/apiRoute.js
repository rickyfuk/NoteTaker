// load the fs modual
const fs = require('fs');

// return the routing to server.js
module.exports = function (app) {
	// load the data from the database when get perform
	//  app.get('/api/notes', async (req, res) => {
	//      try{
	//          const database = await fs.readFile('../db/db.json')
	//      }
	//     res.json(dataBase);
	//   });
	app.get('/api/notes', function (req, res) {
		(notes) => {
			fs.readFile('../db/db.json');
		};
		return res.json(notes);
	});
};
