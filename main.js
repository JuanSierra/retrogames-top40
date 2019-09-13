const fs = require('fs');

let data = fs.readFileSync('data/retrotop40.json');
let entries = JSON.parse(data);

const alex = entries.filter(e => e.Autor == "Alex");
const pol = entries.filter(e => e.Autor == "Pol");
const nico = entries.filter(e => e.Autor == "Nico");

let filtered = [];
filtered.push(alex);
filtered.push(pol);
filtered.push(nico);

let file = fs.writeFileSync('retrotop40.filtered.json', JSON.stringify(filtered));