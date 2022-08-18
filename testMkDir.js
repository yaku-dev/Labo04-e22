const path = require("path");
const fs = require("fs");
console.log("debut du programme");

fs.mkdirSync(path.join(__dirname, "mesFichiers", "test1"), {});
console.log("Dossier Test1 cree avec succes");
fs.mkdir(path.join(__dirname, "mesFichiers", "test2"), {}, (err) => {
  if (err) throw err;
  //sinon
  console.log("Dossier Test2 cree avec succes");
});

console.log("fin du programme");
