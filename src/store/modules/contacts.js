import { router } from "@/routes"

export default {
    namespaced: true,
    state: {
        categories: [],
        contacts: [],
        currentContact: {}
    },
    getters: {
        getContacts(state) {
            return state.contacts;
        },
        getCurrentContact(state) {
            return state.currentContact;
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
        addCurrentContact(state, contact) {
            for (let key in contact) {
                state.currentContact[key] = contact[key];
            }
        },
    },
    actions: {
        addNewContact(ctx, contact) {
            // console.log('POST obj', contact);
            ctx.commit('setPreloaderTrue');
            fetch('/api/phonebook', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'name': contact.name,
                    'surname': contact.surname,
                    'email': [ contact.email ],
                    'phone': [{
                        '_id': contact.id,
                        'category': contact.category,
                        'value': contact.phone,
                    }],
                    'bornDate': contact.bornDate,
                    'category': contact.id
                })
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    // console.log('Contact: ', data);
                    console.log('Result: ', data.message);
                    // ctx.commit('addOneContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push("/home")
                    }, 500)
                })
        },
        fullInfoContactView(ctx, id) {
            // console.log('POST obj', contact);
            ctx.commit('setPreloaderTrue');
            fetch(`/api/phonebook/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    console.log('Contact: ', data);
                    ctx.commit('addCurrentContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push(`/view/${id}`)
                    }, 500)
                })
        },
        fullInfoContactEdit(ctx, id) {
            // console.log('POST obj', contact);
            ctx.commit('setPreloaderTrue');
            fetch(`/api/phonebook/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    console.log('Contact: ', data);
                    ctx.commit('addCurrentContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push(`/edit/${id}`)
                    }, 500)
                })
        },
        modificationContact(ctx, contact) {
            // console.log('POST obj', contact);
            ctx.commit('setPreloaderTrue');
            fetch(`/api/phonebook/${contact.id}`, {
                method: 'PUT',
                mode: 'cors',
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(contact)
                // body: JSON.stringify({
                //     'name': contact.name,
                //     'surname': contact.surname,
                //     'email': [ contact.email ],
                //     'phone': [{
                //         '_id': contact.id,
                //         'category': contact.category,
                //         'value': contact.phone,
                //     }],
                //     'bornDate': contact.bornDate,
                //     'category': contact.id,
                //     'position': contact.position,
                //     'information': contact.information,
                // })
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    // console.log('Contact: ', data);
                    console.log('Result: ', data.message);
                    // ctx.commit('addOneContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push("/home")
                    }, 500)
                })
        },
        addNewCategory(ctx, { name }) {
            // console.log('CAT obj', category);
            ctx.commit('setPreloaderTrue');
            fetch('/api/categories', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'name': name,
                })
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    // console.log('Category: ', data);
                    console.log('Result: ', data.message);
                    // ctx.commit('addOneContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push("/home")
                    }, 500)
                })
        },
        removeCategory(ctx, { id }) {
            // console.log('CAT obj', category);
            ctx.commit('setPreloaderTrue');
            fetch(`/api/categories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }
            }).then(response => response.json())
                .catch(console.log)
                .then(data => {
                    // console.log('Category: ', data);
                    console.log('Result: ', data.message);
                    // ctx.commit('addOneContact', data);
                    setTimeout(() => {
                        ctx.commit('setPreloaderFalse');
                        router.push("/home")
                    }, 500)
                })
        }
    }
}