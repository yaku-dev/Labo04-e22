const { Console } = require("console");
const path = require("path");

console.log("Affichage de path.basename", path.basename(__filename));
console.log("Affichage du path.dirname", path.dirname(__filename));
console.log("Affichage de __filename", path.dirname(__filename));

console.log("Affichage du path.dirname", __dirname);
console.log("Affichage de __filename", __filename);
console.log("delimiter vaut:", path.delimiter);
console.log("Affichage de path.extname", path.extname(__filename));
console.log("Affichage de path.parse", path.parse(__filename));
const partiesFichier = path.parse(__filename);
console.log(partiesFichier.name);
console.log(partiesFichier.root);
console.log(partiesFichier.dir);
console.log("Affichege du ext  partir de l appel  path.parse", path.parse.ext);
console.log(
  "Construction d un chemin de fichier",
  path.join(__dirname, "MesFichiers", "toto.txt")
);
console.log("le separateur est ", path.sep);

const fs = require("fs");
fs.mkdirSync(path.join(__dirname, "MesFichiers", "test99"));
fs.unlinkSync(path.join(__dirname, "MesFichiers", "toto.txt"));
