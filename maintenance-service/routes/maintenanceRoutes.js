const express = require('express');
const { addMaintenanceRequest, getMaintenanceRequests } = require('../controllers/maintenanceController');
const router = express.Router();

router.post('/', addMaintenanceRequest);
router.get('/', getMaintenanceRequests);

module.exports = router;
