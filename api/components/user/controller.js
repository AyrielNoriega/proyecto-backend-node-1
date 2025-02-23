let nanoid;

(async () => {
    nanoid = (await import('nanoid')).nanoid;
})();

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

    function upsert(data) {
        const user = {
            id: data.id || nanoid(),
            name: data.name,
        }

        return store.upsert(TABLA, user);
    }


    return {
        list,
        get,
    };
}
