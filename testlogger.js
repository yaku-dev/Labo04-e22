const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (objet) =>
  console.log("gestionnaire a ete appele", objet)
);

logger.log("Connexion a la Bd reussit");
logger.log("salut tout le monde");
logger.log("2e message");
