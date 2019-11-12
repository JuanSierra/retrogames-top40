const fs = require('fs');
const Mustache = require('mustache');

let data = fs.readFileSync('data/retrotop40.json');
let template = fs.readFileSync('template.mustache', 'utf8');
let entries = JSON.parse(data);

let filtered = {
	"Alex" : entries.filter(e => e.Autor == "Alex"),
	"Pol" : entries.filter(e => e.Autor == "Pol"),
	"Nico" : entries.filter(e => e.Autor == "Nico"),
	"Todos" : entries.filter(e => e.Autor == "Todos"),
	"getAuthor" : function () {
		return function (text, render) {
			var author =  render(text);
			if(author.indexOf(',') != -1){
				author = author.split(',')[0];
			}
			
			return author;
		}
	},
	"getAuthorLink" : function () {
		return function (text, render) {
			var author =  render(text);
			if(author.indexOf(',') != -1){
				let parts = author.split(',');
				author = `<a href="${parts[1]}">${parts[0]}</a>`
			}
			
			return author;
		}
	},
	"getLicenseLink" : function () {
		return function (text, render) {
			var license =  render(text);
			let parts = license.split(',');
			let link = `<a href="${parts[1]}">${parts[0]}</a>`;
			
			return render(link);
		}
	}
};

var rendered = Mustache.render(template, filtered);
fs.writeFile('dist/index.html', rendered , (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});