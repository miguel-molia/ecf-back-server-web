import { Sequelize } from "sequelize";
const config = require("./config");

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connexion à la base de données réussie"))
  .catch((error: Error) =>
    console.log("Erreur de connexion à la base de données:", error)
  );

require("./models");

sequelize.sync({ force: false }).then(async () => {
  console.log("Les modèles et les tables sont synchronisés.");
});
