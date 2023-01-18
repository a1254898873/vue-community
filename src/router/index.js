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
            path: '/notice',
            name: 'notice',
            component: () => import(/* webpackChunkName: "login" */ '../pages/NoticePage')
        },
        {
            path: '/noticeDetail',
            name: 'noticeDetail',
            component: () => import(/* webpackChunkName: "login" */ '../pages/NoticeDetailPage')
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
        },
        {
            path: '/followee',
            name: 'followee',
            component: () => import(/* webpackChunkName: "login" */ '../pages/FolloweePage')
        },
        {
            path: '/follower',
            name: 'follower',
            component: () => import(/* webpackChunkName: "login" */ '../pages/FollowerPage')
        },
        {
            path: '/mypost',
            name: 'mypost',
            component: () => import(/* webpackChunkName: "login" */ '../pages/MyPostPage')
        },
        {
            path: '/myreply',
            name: 'myreply',
            component: () => import(/* webpackChunkName: "login" */ '../pages/MyReply')
        }
    ]
})

export default router
