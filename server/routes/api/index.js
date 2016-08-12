'use strict';

const express       = require('express');
const middleware    = require('../../middleware');

const projects      = require('./projects');
const rendernodes   = require('./rendernodes');

let router = express.Router();

// middleware
router.use(middleware);

// set up routes
projects.use(router);
rendernodes.use(router);

module.exports = router;
