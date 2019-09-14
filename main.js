const fs = require('fs');

let data = fs.readFileSync('data/retrotop40.json');
let entries = JSON.parse(data);

let filtered = {
	"Alex" : entries.filter(e => e.Autor == "Alex"),
	"Pol" : entries.filter(e => e.Autor == "Pol"),
	"Nico" : entries.filter(e => e.Autor == "Nico")
};

let file = fs.writeFileSync('data/retrotop40.filtered.json', JSON.stringify(filtered));