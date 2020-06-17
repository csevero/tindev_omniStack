const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://localhost:27017/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);