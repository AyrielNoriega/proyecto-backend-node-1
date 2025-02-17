const express = require('express');

const response = require('../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('All users');
    response.success(req, res, 'All users', 200);
});

module.exports = router;
