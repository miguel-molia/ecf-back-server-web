"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require('http-errors');
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    if (err instanceof createError.HttpError) {
        res.status(err.status || 500).json({
            error: err.message || 'Une erreur est survenue.',
        });
    }
    else {
        res.status(500).json({
            error: 'Erreur interne du serveur.',
        });
    }
}
module.exports = errorHandler;
