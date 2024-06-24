const express = require('express');
const { addMessage, getMessages } = require('../controllers/messageController');
const router = express.Router();

router.post('/', addMessage);
router.get('/', getMessages);

module.exports = router;
