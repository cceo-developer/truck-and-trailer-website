import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('@/views/Home.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'home', component: Home}],
    scrollBehavior: () => ({ top: 0}),
})



