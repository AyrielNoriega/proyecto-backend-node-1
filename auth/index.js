const jws = require('jsonwebtoken');

function sign(data) {
    return jws.sign(data, 'secret');
}

module.exports = {
    sign,
};
