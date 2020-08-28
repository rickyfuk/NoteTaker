// get the fs module
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Connector {
	constructor() {}
	getNotes() {
		return readFileAsync('db/db.json', 'utf8').then((notes) => {
			let notesParse = JSON.parse(notes);
			let id = 1;
			notesParse.forEach((note) => {
				note.id = id;
				id++;
			});
			console.log(notesParse);
			return notesParse;
		});
	}
	writeNotes(newNote) {
		return this.getNotes().then((notes) => {
			console.log(notes);
			if (Object.keys(newNote).length === 0) {
				throw new Error('Please include a title');
			}
			notes.push(newNote);
			let writeResult = JSON.stringify(notes);
			console.log(writeResult);
			return writeFileAsync('db/db.json', writeResult);
		});
	}
	deleteNotes(id) {
		return this.getNotes().then((notes) => {
			console.log(id);
			for (let i = 0; i < notes.length; i++) {
				if (parseInt(notes[i].id) === id) {
					notes.splice(i, 1);
					console.log(notes);
				}
			}
			let writeResult = JSON.stringify(notes);
			return writeFileAsync('db/db.json', writeResult);
		});
	}
}

module.exports = new Connector();
