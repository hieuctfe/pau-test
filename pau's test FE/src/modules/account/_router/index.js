import layout from '../_components/layout'
import register from '../_components/register'
import login from '../_components/login'
import noNeedAuth from '../_components/page-no-need-auth'
import needAuth from '../_components/page-need-auth'

export default {
    path: '/',
    component: layout,
    meta: {
        requiresAuth: false,
        roles: [],
    },
    children: [
        {
            path: '',
            name: 'NoNeedAuth',
            component: noNeedAuth,
            meta: {
                title: "No Need Auth Page",
                requiresAuth: false,
                failback: false,
            },
        },
        {
            path: '/needauthroute',
            name: 'NeedAuth',
            component: needAuth,
            meta: {
                title: "Need Auth Page",
                requiresAuth: true,
                failback: true,
            },
        },
        {
            path: '/register',
            name: 'Register',
            component: register,
            meta: {
                title: "Register",
                requiresAuth: false,
                failback: true,
            },
        },
        {
            path: '/login',
            name: 'Login',
            component: login,
            meta: {
                title: "Login",
                requiresAuth: false,
                failback: true,
            },
        }
    ],
}

