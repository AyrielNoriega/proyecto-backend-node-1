const express = require('express');

const user = require('./components/user/network');
const config = require('../config.js');
const app = express();

// Routes
app.use('/api/users', user);

app.listen(config.api.port, () => {
    console.log(`Hey, Server is running on port ${config.api.port}`);
});