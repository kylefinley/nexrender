'use strict';

const express       = require('express');
// const middleware    = require('../middleware');

const projects      = require('./projects');

let router = express.Router();

// middleware
// router.use(middleware);

router.get('/', (req, res) => {
    res.render('admin/index');
});

// set up routes
projects.use(router);

module.exports = router;
