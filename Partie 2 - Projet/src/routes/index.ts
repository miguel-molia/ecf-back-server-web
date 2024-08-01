const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const articleRoutes = require('./article');
const clientRoutes = require('./client');
const panierRoutes = require('./panier');
const commandeRoutes = require('./commande');
const commandeArticleRoutes = require('./commandeArticle');
const panierArticleRoutes = require('./panierArticle');
const authRoutes = require('./auth'); 

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/clients', clientRoutes);
router.use('/paniers', panierRoutes);
router.use('/commandes', commandeRoutes);
router.use('/commande-articles', commandeArticleRoutes);
router.use('/panier-articles', panierArticleRoutes);
router.use('/auth', authRoutes);

module.exports = router;

