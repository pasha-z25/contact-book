import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Contacts from './modules/contacts'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        preloader: false,
    },
    getters: {
        getPreloader(state) {
            return state.preloader;
        },
    },
    mutations: {
        setPreloaderTrue(state) {
            state.preloader = true;
        },
        setPreloaderFalse(state) {
            state.preloader = false;
        },
    },
    modules: {
        User,
        Contacts
    }
})