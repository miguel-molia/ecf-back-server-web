"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employe = require("../models/employe");
exports.getAllEmployes = async (req, res) => {
    try {
        const employes = await Employe.findAll();
        res.status(200).json(employes);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération des employés" });
    }
};
exports.getEmployeById = async (req, res) => {
    try {
        const employe = await Employe.findByPk(req.params.id);
        if (!employe) {
            return res.status(404).json({ error: "Employé non trouvé" });
        }
        res.status(200).json(employe);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la récupération de l'employé" });
    }
};
exports.createEmploye = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ error: "Tous les champs sont requis" });
        }
        const employe = await Employe.create({
            firstname,
            lastname,
            email,
            password,
        });
        res.status(201).json({ message: "Employé créé avec succès", employe });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la création de l'employé" });
    }
};
exports.updateEmploye = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const employe = await Employe.findByPk(req.params.id);
        if (!employe) {
            return res.status(404).json({ error: "Employé non trouvé" });
        }
        await employe.update({ firstname, lastname, email, password });
        res.status(200).json(employe);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la mise à jour de l'employé" });
    }
};
exports.deleteEmploye = async (req, res) => {
    try {
        const employe = await Employe.findByPk(req.params.id);
        if (!employe) {
            return res.status(404).json({ error: "Employé non trouvé" });
        }
        await employe.destroy();
        res.status(204).json();
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Erreur lors de la suppression de l'employé" });
    }
};
