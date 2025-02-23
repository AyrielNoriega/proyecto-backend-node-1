const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./index');

router.get('/', (req, res) => {
    // res.send('All users');
    controller.list()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
});

router.get('/:id', (req, res) => {
    controller.get(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User created');
});

router.put('/', (req, res) => {
    res.send('User updated');
});

router.delete('/:id', (req, res) => {
    res.send('User deleted');
});

module.exports = router;
