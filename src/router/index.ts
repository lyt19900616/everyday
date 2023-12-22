import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'profile',
        component: () => import('@/pages/profile.vue')
    },
    {
        path: '/music',
        name: 'music',
        component: () => import('@/pages/music.vue')
    },

    // css 动画
    {
        path: '/css-animation',
        name: 'css-animation',
        component: () => import('@/pages/css-animation/index.vue'),
    },
    {
        path: '/white-black-ball',
        name: 'white-black-ball',
        component: () => import('@/pages/css-animation/white-black-ball.vue')
    },
        
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router