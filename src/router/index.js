import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('@/views/Home.vue');
const StubPage = () => import('@/views/stub.vue');

const Services = () => import('@/views/Services.vue');
const Pages = () => import('@/views/Pages.vue');
const Blog = () => import('@/views/Blog.vue');
const Shop = () => import('@/views/Shop.vue');
const Contacts = () => import('@/views/Contacts.vue');
const Quote = () => import('@/views/Quote.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },

        { path: '/services', component: Services },
        { path: '/services/road',      name: 'services-road',      component: StubPage, meta: { title: 'Road Freight' } },
        { path: '/services/air',       name: 'services-air',       component: StubPage, meta: { title: 'Air Freight' } },
        { path: '/services/sea',       name: 'services-sea',       component: StubPage, meta: { title: 'Sea Freight' } },
        { path: '/services/wh',        name: 'services-warehouse', component: StubPage, meta: { title: 'Warehousing' } },
        { path: '/services/proj',      name: 'services-project',   component: StubPage, meta: { title: 'Project Cargo' } },
        { path: '/services/cust',   name: 'services-customs',   component: StubPage, meta: { title: 'Customs' } },

        { path: '/pages', component: Pages },
        { path: '/pages/about',   name: 'pages-about',   component: StubPage, meta: { title: 'About' } },
        { path: '/pages/team',    name: 'pages-team',    component: StubPage, meta: { title: 'Team' } },
        { path: '/pages/pricing', name: 'pages-pricing', component: StubPage, meta: { title: 'Pricing' } },
        { path: '/pages/careers', name: 'pages-careers', component: StubPage, meta: { title: 'Careers' } },
        { path: '/pages/faq',     name: 'pages-faq',     component: StubPage, meta: { title: 'FAQ' } },

        { path: '/blog', component: Blog },
        { path: '/shop', component: Shop },
        { path: '/contacts', component: Contacts },
        { path: '/quote', component: Quote },
    ],
    scrollBehavior: () => ({ top: 0}),
})



