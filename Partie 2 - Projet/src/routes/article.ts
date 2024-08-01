const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const articleController = require('../controllers/articleController');


router.get('/', authenticateToken, articleController.getAllArticles);
router.post('/', authenticateToken, articleController.createArticle);
router.put('/:id', authenticateToken, articleController.updateArticle);
router.delete('/:id', authenticateToken, articleController.deleteArticle);

module.exports = router;
