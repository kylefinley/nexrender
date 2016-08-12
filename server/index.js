'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const api           = require('./routes/api');
const admin         = require('./routes/admin');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'twig');
app.set('views', __dirname + '/views')

app.use('/api', api);
app.use('/admin', admin);

app.get('/', (req, res) => {
    res.redirect('/admin');
});

module.exports = {
    start: function(port) {
        app.listen(port, function () {
            console.log('nexrender.server is listening on port:', port);
        });
    }
};
