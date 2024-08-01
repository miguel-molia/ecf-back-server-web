"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const PanierArticle = sequelize.define("PanierArticle", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    panierId: {
        type: DataTypes.INTEGER,
        references: {
            model: "paniers",
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
module.exports = PanierArticle;
