import { router } from "@/routes"

export default {
    state: {
        auth: false,
        cookie: {},
        user: {},
        currentContactId: '',
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getAuthStatus(state) {
            return state.auth
        },
        /*
        getCurrentContactId(state) {
            return state.currentContactId;
        },
        */
    },
    mutations: {
        setCookie(state, cookie) {
            state.cookie = cookie;
            document.cookie = `${state.cookie.name}=${state.cookie.value}`;
        },
        setAuthTrue(state) {
            state.auth = true;
        },
        setAuthFalse(state) {
            state.auth = false;
            router.push("/")
        },
        addUserInfo(state, userObj) {
            for (let key in userObj) {
                state.user[key] = userObj[key];
            }
        },
        clearUser(state) {
            for(let key in state.user) {
                delete state.user[key];
            }
        },
        /*
        setCurrentContactId(state, id) {
            state.currentContactId = id;
        },
        clearCurrentContactId(state) {
            state.currentContactId = '';
        },
        */
    },
    actions: {
        initLogOut({ commit }) {
            commit('clearCategories');
            commit('clearContacts');
            commit('clearUser');
            commit('setAuthFalse');
            commit('setPreloaderFalse');
        },
        async fetchUser({ commit }, { email, password }) {
            commit('setPreloaderTrue');
            fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            }).then(response => response.json())
                .catch(console.log)
                .then( data => {
                    commit('setCookie', data.cookie);
                    console.log('Result:', data.message);
                    fetch('/api/users/profile', {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }).then(response => response.json())
                        .catch(console.log)
                        .then(data => {
                            console.log('User: ', data);
                            commit('addUserInfo', data);
                        });
                    fetch('/api/categories', {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }).then(response => response.json())
                        .catch(console.log)
                        .then(data => {
                            console.log('Categories: ', data);
                            commit('addCategories', data);
                        });
                    fetch('/api/phonebook', {
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'include',
                        withCredentials: true,
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }).then(response => response.json())
                        .catch(console.log)
                        .then(data => {
                            console.log('Contacts: ', data);
                            commit('addContacts', data);
                        });
                    commit('setAuthTrue');
                    setTimeout(() => {
                        commit('setPreloaderFalse');
                        router.push("/home")
                    }, 500);
                })
        },
        async registerUser ({ commit }, user) {
            commit('setPreloaderTrue');
            fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'email': user.email,
                    'password': user.password,
                    'name': user.name,
                    'surname': user.surname
                })
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    console.log(data.message);
                    setTimeout(() => {
                        commit('setPreloaderFalse');
                        router.push("/")
                    }, 500)
                })
        }
        /*
        setContactId(ctx, id) {
            ctx.commit('setCurrentContactId', id);
        },
        clearContactId(ctx) {
            ctx.commit('clearCurrentContactId');
        }
        */
    },
    strict: process.env.NODE_ENV !== 'production'
}