"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const Panier = sequelize.define("Panier", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: "clients",
            key: "id",
        },
    },
});
module.exports = Panier;
