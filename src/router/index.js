import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "login" */ '../pages/IndexPage')
        }
    ]
})

export default router
