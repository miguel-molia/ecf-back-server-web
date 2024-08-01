"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Panier = require("../models/panier");
exports.getAllPaniers = async (req, res) => {
    try {
        const paniers = await Panier.findAll();
        res.status(200).json(paniers);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération des paniers" });
    }
};
exports.getPanierById = async (req, res) => {
    try {
        const panier = await Panier.findByPk(req.params.id);
        if (!panier) {
            return res.status(404).json({ error: "Panier non trouvé" });
        }
        res.status(200).json(panier);
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération du panier" });
    }
};
exports.createPanier = async (req, res) => {
    try {
        const { clientId } = req.body;
        if (clientId === undefined) {
            return res.status(400).json({ error: "ID du client est requis" });
        }
        const panier = await Panier.create({ clientId });
        res.status(201).json({ message: "Panier créé avec succès", panier });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la création du panier" });
    }
};
exports.updatePanier = async (req, res) => {
    try {
        const { clientId } = req.body;
        const panier = await Panier.findByPk(req.params.id);
        if (!panier) {
            return res.status(404).json({ error: "Panier non trouvé" });
        }
        await panier.update({ clientId });
        res.status(200).json(panier);
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la mise à jour du panier" });
    }
};
exports.deletePanier = async (req, res) => {
    try {
        const panier = await Panier.findByPk(req.params.id);
        if (!panier) {
            return res.status(404).json({ error: "Panier non trouvé" });
        }
        await panier.destroy();
        res.status(204).json();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la suppression du panier" });
    }
};
