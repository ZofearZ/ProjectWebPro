import { createRouter, createWebHistory } from 'vue-router'
import HomePlaceView from '../views/HomePlaceView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePlaceView
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/place/:place_id',
            name: 'place',
            component: () => import('../views/PlaceView.vue'),
            props: true
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue')
        }
    ]
})

export default router
