import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from './views/LogIn'
import Error from "./views/Error";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LogIn
        },
        {
            path: '/register',
            component: () => import('./views/Register')
        },
        {
            path: '*',
            component: Error
        }
    ]
});