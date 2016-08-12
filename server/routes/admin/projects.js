'use strict';

// const projects      = require('../controllers/project');

module.exports = {
    use: function(router) {

        // projects
        router.get('/projects', (req, res) => {
            res.send(200);
        });

        router.post('/projects', (req, res) => {  
            res.send(200);
        });

        router.get('/projects/:id', (req, res) => {
            res.send(200);
        });

        router.put('/projects/:id', (req, res) => {
            res.send(200);
        });

        router.delete('/projects/:id', (req, res) => {
            res.send(200);
        });
    }
};
