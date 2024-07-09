const express = require('express');
const router = express.Router();
const { initiatePayment, confirmPayment } = require('../controllers/paymentController');

// @route POST /api/payments/initiate
// @desc Initiate a payment
// @access Public
router.post('/initiate', initiatePayment);

// @route POST /api/payments/confirm
// @desc Confirm a payment
// @access Public
router.post('/confirm', confirmPayment);

module.exports = router;
