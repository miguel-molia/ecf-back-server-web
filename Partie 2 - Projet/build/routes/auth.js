"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/login', authController.login);
router.post('/register', authController.register);
module.exports = router;
