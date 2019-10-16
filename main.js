const fs = require('fs');
const Mustache = require('mustache');

let data = fs.readFileSync('data/retrotop40.json');
let template = fs.readFileSync('template.mustache', 'utf8');
let entries = JSON.parse(data);

let filtered = {
	"Alex" : entries.filter(e => e.Autor == "Alex"),
	"Pol" : entries.filter(e => e.Autor == "Pol"),
	"Nico" : entries.filter(e => e.Autor == "Nico"),
	"Todos" : entries.filter(e => e.Autor == "Todos")
};

var rendered = Mustache.render(template, filtered);
fs.writeFile('dist/index.html', rendered , (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});