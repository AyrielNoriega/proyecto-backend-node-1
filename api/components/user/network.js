const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    // res.send('All users');
    const list = controller.list();
    response.success(req, res, list, 200);
});

module.exports = router;
