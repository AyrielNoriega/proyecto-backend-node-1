const store = require('../../../store/dummy');

function list() {
    return store.list('user');
}

module.exports = {
    list,
}
