const express = require('express');
const { addPayment, getPayments } = require('../controllers/paymentController');
const router = express.Router();

router.post('/', addPayment);
router.get('/', getPayments);

module.exports = router;
