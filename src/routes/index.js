/** Express router providing all version routes.
 * @module routes
 * @requires express
 */
const express = require('express');

const router = express.Router();

// Auth checker middleware here

/*
 *******************************
 *  Routes related to v1 APIs  *
 *******************************
 * Endpoints here can be reached
 * with {baseUrl}/v1/
 */
const v1 = require('./v1');

router.use('/v1', v1);

module.exports = router;
