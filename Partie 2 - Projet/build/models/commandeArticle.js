"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const CommandeArticle = sequelize.define("CommandeArticle", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    commandeId: {
        type: DataTypes.INTEGER,
        references: {
            model: "commandes",
            key: "id",
        },
    },
    articleId: {
        type: DataTypes.INTEGER,
        references: {
            model: "articles",
            key: "id",
        },
    },
});
module.exports = CommandeArticle;
