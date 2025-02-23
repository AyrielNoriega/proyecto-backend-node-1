const auth = require('../auth');

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

    async function upsert(data) {
        const user = {
            id: data.id || nanoid(),
            name: data.name,
            username: data.username,
        }

        if (data.password || data.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: data.password,
            });
        }

        return store.upsert(TABLA, user);
    }


    return {
        list,
        get,
        upsert,
    };
}
