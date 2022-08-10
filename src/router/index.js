import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "login" */ '../pages/IndexPage')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "login" */ '../pages/RegisterPage')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../pages/LoginPage')
        },
        {
            path: '/discussDetail',
            name: 'discussDetail',
            component: () => import(/* webpackChunkName: "login" */ '../pages/DiscussDetailPage')
        },
        {
            path: '/letter',
            name: 'letter',
            component: () => import(/* webpackChunkName: "login" */ '../pages/LetterPage')
        },
        {
            path: '/letterDetail',
            name: 'letterDetail',
            component: () => import(/* webpackChunkName: "login" */ '../pages/LetterDetailPage')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "login" */ '../pages/ProfilePage')
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import(/* webpackChunkName: "login" */ '../pages/SettingPage')
        }
    ]
})

export default router
