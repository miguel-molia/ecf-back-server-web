"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const config = require('../config/config');
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.status(401).json({ error: 'Token manquant' });
    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err)
            return res.status(403).json({ error: 'Token invalide' });
        req.user = user;
        next();
    });
}
module.exports = authenticateToken;
