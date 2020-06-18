import { router } from "@/routes"

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
        },
        clearCategories(state) {
            state.categories.length = 0;
            // state.categories.splice(0, state.categories.length);
        },
        clearContacts(state) {
            state.contacts.length = 0;
            // state.contacts.splice(0, state.contacts.length);
        },
        addOneContact(state, payload) {
            state.contacts.push(payload)
        },
    },
    actions: {
        addNewContact(ctx, { name, surname, email, id, category, phone, bornDate }) {
            ctx.commit('setPreloaderTrue');
            fetch('/api/phonebook', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'name': name,
                    'surname': surname,
                    'email': [email],
                    'phone': [{
                        '_id': id,
                        'category': category,
                        'value': phone,
                    }],
                    'bornDate': bornDate,
                    'category': id
                })
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    console.log('Contact: ', data);
                    console.log('Result: ', data.message);
                    ctx.commit('addOneContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push("/home")
                    }, 500)
                })
        }
    }
}