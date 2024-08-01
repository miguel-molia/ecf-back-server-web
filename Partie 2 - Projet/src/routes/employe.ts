const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employeController');
const authenticateToken = require('../middleware/authMiddleware');


router.get('/', authenticateToken, employeController.getAllEmployes);
router.get('/:id', authenticateToken, employeController.getEmployeById);
router.post('/', authenticateToken, employeController.createEmploye);
router.put('/:id', authenticateToken, employeController.updateEmploye);
router.delete('/:id', authenticateToken, employeController.deleteEmploye);

module.exports = router;
