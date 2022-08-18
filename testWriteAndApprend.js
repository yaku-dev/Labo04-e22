const path = require("path");
const fs = require("fs");
console.log("debut du programme");

fs.writeFile(
  path.join(__dirname, "mesFichiers", "salut.txt"),
  "Du texte de salut.txt. ",
  (err) => {
    if (err) throw err;
    fs.appendFile(
      path.join(__dirname, "mesFichiers", "salut.txt"),
      "Je rajoute du texte.",
      (err) => {
        if (err) throw err;
        //sinon
        console.log("Apprend executer");
      }
    );

    console.log("WriteFile executer");
  }
);
