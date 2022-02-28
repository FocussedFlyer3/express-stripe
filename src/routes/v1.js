/** Express router providing all v1 routes.
 * @module routes/v1
 * @requires express
 * @requires express-longpoll
 */
const express = require('express');

const router = express.Router();

/*
 *********************************
 *  Routes related to payment   *
 *********************************
 */
const paymentController = require('../controllers/v1/paymentController');

// get all
router.get('/payments', paymentController.all);

module.exports = router;
