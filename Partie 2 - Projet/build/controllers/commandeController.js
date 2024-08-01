"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commande = require("../models/commande");
exports.getAllCommandes = async (req, res) => {
    try {
        const commandes = await Commande.findAll();
        res.status(200).json(commandes);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération des commandes" });
    }
};
exports.getCommandeById = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (!commande) {
            return res.status(404).json({ error: "Commande non trouvée" });
        }
        res.status(200).json(commande);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération de la commande" });
    }
};
exports.createCommande = async (req, res) => {
    try {
        const { dateCommande, montantTotal, clientId, isValidated } = req.body;
        if (dateCommande === undefined ||
            montantTotal === undefined ||
            clientId === undefined) {
            return res
                .status(400)
                .json({ error: "Date, montant total et ID du client sont requis" });
        }
        const commande = await Commande.create({
            dateCommande,
            montantTotal,
            clientId,
            isValidated,
        });
        res.status(201).json({ message: "Commande créée avec succès", commande });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la création de la commande" });
    }
};
exports.updateCommande = async (req, res) => {
    try {
        const { dateCommande, montantTotal, clientId, isValidated } = req.body;
        const commande = await Commande.findByPk(req.params.id);
        if (!commande) {
            return res.status(404).json({ error: "Commande non trouvée" });
        }
        await commande.update({
            dateCommande,
            montantTotal,
            clientId,
            isValidated,
        });
        res.status(200).json(commande);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la mise à jour de la commande" });
    }
};
exports.deleteCommande = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (!commande) {
            return res.status(404).json({ error: "Commande non trouvée" });
        }
        await commande.destroy();
        res.status(204).json();
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la suppression de la commande" });
    }
};
