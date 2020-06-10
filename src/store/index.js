import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Contacts from './modules/contacts'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        User,
        Contacts
    }
})