const path = require("path");
const fs = require("fs");
console.log("debut du programme");

fs.appendFile(
  path.join(__dirname, "mesFichiers", "salut.txt"),
  "Texte",
  (err) => {
    if (err) throw err;
    //sinon
    console.log("Fichier salut.txt cree");
  }
);

//•La fonction writeFile écrit dans le fichier
//• La fonction appendFile ajoute au fichier
//• Mais attention les deux écritures seront en même temps….
