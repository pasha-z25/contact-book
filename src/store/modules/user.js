// import router from "vue-router"
export default {
    state: {
        auth: false,
        cookie: {},
        user: {}
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getCookie(state) {
            return state.cookie;
        }
    },
    mutations: {
        setCookie(state, cookie) {
            state.cookie = cookie;
            document.cookie = `${state.cookie.name}=${state.cookie.value}`;
        }
    },
    actions: {
        async fetchUser(ctx, { email, password }) {
            // console.log(ctx);
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
                            console.log(data);
                            setTimeout(() => {
                                // this.$router.push = ("/register")
                            }, 5000)
                        });
                })
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}