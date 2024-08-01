"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Article = require("../models/article");
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json(articles);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération des articles" });
    }
};
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({ error: "Article non trouvé" });
        }
        res.status(200).json(article);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération de l'article" });
    }
};
exports.createArticle = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !description || price === undefined) {
            return res
                .status(400)
                .json({ error: "Nom, description et prix sont requis" });
        }
        const article = await Article.create({ name, description, price });
        res.status(201).json({ message: "Article créé avec succès", article });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la création de l'article" });
    }
};
exports.updateArticle = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({ error: "Article non trouvé" });
        }
        await article.update({ name, description, price });
        res.status(200).json(article);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la mise à jour de l'article" });
    }
};
exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({ error: "Article non trouvé" });
        }
        await article.destroy();
        res.status(204).json();
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la suppression de l'article" });
    }
};
