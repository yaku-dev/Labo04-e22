const EventEmitter = require("events");

class MonEmeteurClasse extends EventEmitter {}

//Objet qui sert a emetre un evenement
const emeteur = new MonEmeteurClasse();

emeteur.on("evenement", () => {
  console.log("evenement est ON");
});
emeteur.on("X", () => {
  console.log("X est ON");
});
emeteur.on("Y", () => {
  console.log("Y est ON");
});

emeteur.emit("evenement");
emeteur.emit("evenement");
emeteur.emit("Y");
emeteur.emit("X");
