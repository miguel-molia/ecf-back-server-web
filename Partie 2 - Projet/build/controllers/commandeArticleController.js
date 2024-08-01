"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandeArticle = require("../models/commandeArticle");
exports.getAllCommandeArticles = async (req, res) => {
    try {
        const commandeArticles = await CommandeArticle.findAll();
        res.status(200).json(commandeArticles);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "Erreur lors de la récupération des articles de commande",
        });
    }
};
exports.getCommandeArticleById = async (req, res) => {
    try {
        const commandeArticle = await CommandeArticle.findByPk(req.params.id);
        if (!commandeArticle) {
            return res.status(404).json({ error: "Article de commande non trouvé" });
        }
        res.status(200).json(commandeArticle);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "Erreur lors de la récupération de l'article de commande",
        });
    }
};
exports.createCommandeArticle = async (req, res) => {
    try {
        const { quantite, prix, commandeId, articleId } = req.body;
        if (quantite === undefined ||
            prix === undefined ||
            commandeId === undefined ||
            articleId === undefined) {
            return res
                .status(400)
                .json({
                error: "Quantité, prix, ID de la commande et ID de l'article sont requis",
            });
        }
        const commandeArticle = await CommandeArticle.create({
            quantite,
            prix,
            commandeId,
            articleId,
        });
        res
            .status(201)
            .json({
            message: "Article de commande créé avec succès",
            commandeArticle,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la création de l'article de commande" });
    }
};
exports.updateCommandeArticle = async (req, res) => {
    try {
        const { quantite, prix, commandeId, articleId } = req.body;
        const commandeArticle = await CommandeArticle.findByPk(req.params.id);
        if (!commandeArticle) {
            return res.status(404).json({ error: "Article de commande non trouvé" });
        }
        await commandeArticle.update({ quantite, prix, commandeId, articleId });
        res.status(200).json(commandeArticle);
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "Erreur lors de la mise à jour de l'article de commande",
        });
    }
};
exports.deleteCommandeArticle = async (req, res) => {
    try {
        const commandeArticle = await CommandeArticle.findByPk(req.params.id);
        if (!commandeArticle) {
            return res.status(404).json({ error: "Article de commande non trouvé" });
        }
        await commandeArticle.destroy();
        res.status(204).json();
    }
    catch (error) {
        res
            .status(500)
            .json({
            error: "Erreur lors de la suppression de l'article de commande",
        });
    }
};
