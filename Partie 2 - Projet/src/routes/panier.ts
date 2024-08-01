const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const panierController = require('../controllers/panierController');


router.get('/', authenticateToken, panierController.getAllPaniers); 
router.post('/', authenticateToken, panierController.createPanier); 
router.put('/:id', authenticateToken, panierController.updatePanier); 
router.delete('/:id', authenticateToken, panierController.deletePanier);

module.exports = router;
