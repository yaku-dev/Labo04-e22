const path = require("path");
const fs = require("fs");
console.log("debut du programme");

fs.writeFile(
  path.join(__dirname, "mesFichiers", "salut.txt"),
  "Texte",
  (err) => {
    if (err) throw err;
    //sinon
    console.log("Fichier salut.txt cree");
  }
);

//function WriteFile ecrit dans le fichier.
