const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const clientController = require('../controllers/clientController');


router.get('/', authenticateToken, clientController.getAllClients);
router.get('/:id', authenticateToken, clientController.getClientById);
router.put('/:id', authenticateToken, clientController.updateClient);
router.delete('/:id', authenticateToken, clientController.deleteClient);

module.exports = router;
