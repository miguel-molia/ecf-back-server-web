const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Commande = sequelize.define("Commande", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dateCommande: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
  montantTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: "clients",
      key: "id",
    },
  },
  isValidated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Commande;
