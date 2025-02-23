const express = require('express');

const response = require('../../network/response');
const controller = require('./index');


const router = express.Router();
// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);
router.delete('/:id', remove);


function list(req, res) {
    // res.send('All users');
    controller.list()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
};

function get(req, res) {
    controller.get(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
};

function upsert(req, res) {
    controller.upsert(req.body)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
};

function remove (req, res) {
    res.send('User deleted');
};

module.exports = router;
