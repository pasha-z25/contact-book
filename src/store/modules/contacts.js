export default {
    state: {
        categories: [],
        contacts: []
    },
    getters: {
        getContacts(state) {
            return state.contacts;
        },
        getContactsLength(state) {
            return state.contacts.length;
        }
    },
    mutations: {
        addContacts(state, payload) {
            state.contacts = state.contacts.concat(payload)
        }
    },
    actions: {

    }
}