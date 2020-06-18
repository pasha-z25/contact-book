import { router } from "../../routes"

export default {
    state: {
        auth: false,
        preloader: false,
        cookie: {},
        user: {}
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getPreloader(state) {
            return state.preloader;
        },
        getAuthStatus(state) {
            return state.auth
        }
    },
    mutations: {
        setCookie(state, cookie) {
            state.cookie = cookie;
            document.cookie = `${state.cookie.name}=${state.cookie.value}`;
        },
        setAuthTrue(state) {
            state.auth = true;
        },
        setPreloaderTrue(state) {
            state.preloader = true;
        },
        setPreloaderFalse(state) {
            state.preloader = false;
        },
        addUserInfo(state, userObj) {
            for (let key in userObj) {
                state.user[key] = userObj[key];
            }
        }
    },
    actions: {
        async fetchUser(ctx, { email, password }) {
            // console.log(ctx);
            ctx.commit('setPreloaderTrue');
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
                    ctx.commit('setCookie', data.cookie);
                    console.log('Result:', data.message);
                    fetch('/api/users/profile', {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }).then(response => response.json())
                        .catch(
                            console.log,
                        )
                        .then(data => {
                            console.log('User: ', data);
                            ctx.commit('addUserInfo', data);
                            // ctx.commit('setAuthTrue');
                        });
                    fetch('/api/categories', {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }).then(response => response.json())
                        .catch(
                            console.log,
                        )
                        .then(data => {
                            console.log('Categories: ', data);
                            ctx.commit('addCategories', data);
                            ctx.commit('setAuthTrue');
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
                        .catch(
                            console.log,
                        )
                        .then(data => {
                            console.log('Contacts: ', data);
                            ctx.commit('addContacts', data);
                            ctx.commit('setAuthTrue');
                        });
                    ctx.commit('setPreloaderFalse');
                    router.push("/home")
                })
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}