const TABLA = 'user';


module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list('user');
    }

    function get(id) {
        return store.get('user', id);
    }


    return {
        list,
        get,
    };
}
