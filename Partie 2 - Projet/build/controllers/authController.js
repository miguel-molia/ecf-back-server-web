"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');
// Connexion et génération de token
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user)
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ error: 'Mot de passe incorrect' });
        const token = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
};
// Inscription (enregistrement d'un nouvel utilisateur)
exports.register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstname, lastname, email, password: hashedPassword });
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
};
