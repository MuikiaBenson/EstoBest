const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const CommunicationController = require('../controllers/communicationController');

// Define routes
router.get('/', authMiddleware, CommunicationController.getAllCommunications);
router.get('/', CommunicationController.getAllCommunications);
router.get('/:communicationId', CommunicationController.getCommunicationById);
router.post('/', CommunicationController.createCommunication);
router.put('/:communicationId', CommunicationController.updateCommunication);
router.delete('/:communicationId', CommunicationController.deleteCommunication);

module.exports = router;
