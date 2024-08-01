const express = require('express');
const router = express.Router();
const commandeArticleController = require('../controllers/commandeArticleController');
const authenticateToken = require('../middleware/authMiddleware');


router.get('/', authenticateToken, commandeArticleController.getAllCommandeArticles);
router.get('/:id', authenticateToken, commandeArticleController.getCommandeArticleById);
router.post('/', authenticateToken, commandeArticleController.createCommandeArticle);
router.put('/:id', authenticateToken, commandeArticleController.updateCommandeArticle);
router.delete('/:id', authenticateToken, commandeArticleController.deleteCommandeArticle);

module.exports = router;
