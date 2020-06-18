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
        },
        getCategories(state) {
            return state.categories;
        },
        getCategoriesLength(state) {
            return state.categories.length;
        }
    },
    mutations: {
        addContacts(state, payload) {
            state.contacts = state.contacts.concat(payload)
        },
        addCategories(state, payload) {
            state.categories = state.categories.concat(payload)
        }
    },
    actions: {

    }
}