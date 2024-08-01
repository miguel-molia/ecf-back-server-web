"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config = require("./config");
exports.sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging,
});
exports.sequelize
    .authenticate()
    .then(() => console.log("Connexion à la base de données réussie"))
    .catch((error) => console.log("Erreur de connexion à la base de données:", error));
require("./models");
exports.sequelize.sync({ force: false }).then(async () => {
    console.log("Les modèles et les tables sont synchronisés.");
});
