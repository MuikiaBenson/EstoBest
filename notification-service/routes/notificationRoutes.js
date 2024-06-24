const express = require('express');
const { addNotification, getNotifications } = require('../controllers/notificationController');
const router = express.Router();

router.post('/', addNotification);
router.get('/', getNotifications);

module.exports = router;
