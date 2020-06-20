import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from './views/LogIn'
import Error from "./views/Error";
import { i18n } from "./plugins/i18n";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LogIn,
            meta: {
                title: i18n.t('metaLoginTitle'),
                metaTags: [
                    {
                        name: 'description',
                        content: i18n.t('metaLoginDescription')
                    },
                    {
                        property: 'og:description',
                        content: i18n.t('metaLoginDescription')
                    }
                ]
            }
        },
        {
            path: '/register',
            component: () => import('./views/Register'),
            meta: {
                title: 'Contact book - register page',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Contact management application'
                    },
                    {
                        property: 'og:description',
                        content: 'Contact management application'
                    }
                ]
            }
        },
        {
            path: '/home',
            component: () => import('./views/Home'),
            meta: {
                title: 'Contact book - home page',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Contact management application'
                    },
                    {
                        property: 'og:description',
                        content: 'Contact management application'
                    }
                ]
            }
        },
        {
            path: '/add',
            component: () => import('./views/Add'),
            meta: {
                title: 'Contact book - add contact',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Contact management application'
                    },
                    {
                        property: 'og:description',
                        content: 'Contact management application'
                    }
                ]
            }
        },
        {
            path: '/category',
            component: () => import('./views/EditCategory'),
            meta: {
                title: 'Contact book - edit category',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Contact management application'
                    },
                    {
                        property: 'og:description',
                        content: 'Contact management application'
                    }
                ]
            }
        },
        {
            path: '*',
            component: Error
        }
    ]
});