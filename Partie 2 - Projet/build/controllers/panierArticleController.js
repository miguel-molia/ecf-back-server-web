"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PanierArticle = require("../models/panierArticle");
exports.getAllPanierArticles = async (req, res) => {
    try {
        const panierArticles = await PanierArticle.findAll();
        res.status(200).json(panierArticles);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération des articles de panier" });
    }
};
exports.getPanierArticleById = async (req, res) => {
    try {
        const panierArticle = await PanierArticle.findByPk(req.params.id);
        if (!panierArticle) {
            return res.status(404).json({ error: "Article de panier non trouvé" });
        }
        res.status(200).json(panierArticle);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération de l'article de panier" });
    }
};
exports.createPanierArticle = async (req, res) => {
    try {
        const { quantite, panierId, articleId } = req.body;
        if (quantite === undefined ||
            panierId === undefined ||
            articleId === undefined) {
            return res
                .status(400)
                .json({
                error: "Quantité, ID du panier et ID de l'article sont requis",
            });
        }
        const panierArticle = await PanierArticle.create({
            quantite,
            panierId,
            articleId,
        });
        res
            .status(201)
            .json({ message: "Article de panier créé avec succès", panierArticle });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la création de l'article de panier" });
    }
};
exports.updatePanierArticle = async (req, res) => {
    try {
        const { quantite, panierId, articleId } = req.body;
        const panierArticle = await PanierArticle.findByPk(req.params.id);
        if (!panierArticle) {
            return res.status(404).json({ error: "Article de panier non trouvé" });
        }
        await panierArticle.update({ quantite, panierId, articleId });
        res.status(200).json(panierArticle);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la mise à jour de l'article de panier" });
    }
};
exports.deletePanierArticle = async (req, res) => {
    try {
        const panierArticle = await PanierArticle.findByPk(req.params.id);
        if (!panierArticle) {
            return res.status(404).json({ error: "Article de panier non trouvé" });
        }
        await panierArticle.destroy();
        res.status(204).json();
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la suppression de l'article de panier" });
    }
};
