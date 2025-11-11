import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('@/views/Home.vue');
const Services = () => import('@/views/Services.vue');
const Quote = () => import('@/views/Quote.vue');


const StubPage = () => import('@/views/stub.vue');
const LocationsList = () => import('@/components/locations/LocationsList.vue');
const LocationDetail = () => import('@/components/locations/LocationDetail.vue');
const About = () => import('@/views/About.vue');
const WhyChooseUs = () => import('@/views/WhyChooseUs.vue');
const Contact = () => import('@/views/Contact.vue');
const FAQ = () => import('@/views/FAQ.vue');

//Services
const FleetStorage = () => import('@/components/services/FleetStorageSolutions.vue');
const PrivateYardStorage = () => import('@/components/services/PrivateYardStorage.vue');
const OfficeSpace = () => import('@/components/services/OfficeSpace.vue');
const Maintenance = () => import('@/components/services/Maintenance.vue');

const NotFound = () => import('@/views/NotFound.vue');

export default createRouter({
    history: createWebHistory(),
    routes: [
        // Home
        { path: '/', name: 'home', component: Home, meta: { title: 'TTS | Truck & Trailer Storage' } },

        // Services (página índice + subrutas reales de TTS)
        { path: '/services', name: 'services', component: Services, meta: { title: 'Services | TTS' } },
        { path: '/services/fleet-storage', name: 'services-fleet-storage', component: FleetStorage, meta: { title: 'Fleet Storage Solutions | TTS' } },
        { path: '/services/private-yard',  name: 'services-private-yard',  component: PrivateYardStorage, meta: { title: 'Private Yard Storage | TTS' } },
        { path: '/services/office-space',  name: 'services-office-space',  component: OfficeSpace, meta: { title: 'Office & Warehouse Rentals | TTS' } },
        { path: '/services/maintenance',   name: 'services-maintenance',   component: Maintenance, meta: { title: 'Vehicle Maintenance | TTS' } },

        // Locations (lista + detalle de terminal dinámico)
        { path: '/locations', name: 'locations', component: LocationsList, meta: { title: 'Locations | TTS' } },
        // terminalSlug puede ser: t1, t2, t3, t4 o slugs tipo "randolph-blvd"
        { path: '/locations/:terminalSlug', name: 'location-detail', component: LocationDetail, props: true, meta: { title: 'Terminal | TTS' } },

        // Pages institucionales
        { path: '/about',          name: 'about',          component: About, meta: { title: 'About TTS' } },
        { path: '/why-choose-us',  name: 'why-choose-us',  component: WhyChooseUs, meta: { title: 'Why Choose Us | TTS' } },
        { path: '/faq',            name: 'faq',            component: FAQ, meta: { title: 'FAQ | TTS' } },

        // Contact & Quote
        { path: '/contact',  name: 'contact',  component: Contact, meta: { title: 'Contact | TTS' } },
        { path: '/quote',    name: 'quote',    component: Quote,     meta: { title: 'Get a Quote | TTS' } },

        // --- Redirecciones desde rutas antiguas (no rompas enlaces existentes) ---
        // Antiguos "services" genéricos
        { path: '/services/road', name: 'legacy-services-road', redirect: { name: 'services-fleet-storage' } },
        { path: '/services/air',  name: 'legacy-services-air',  redirect: { name: 'services-fleet-storage' } },
        { path: '/services/sea',  name: 'legacy-services-sea',  redirect: { name: 'services-fleet-storage' } },
        { path: '/services/wh',   name: 'legacy-services-wh',   redirect: { name: 'services-office-space' } },
        { path: '/services/proj', name: 'legacy-services-proj', redirect: { name: 'services-private-yard' } },
        { path: '/services/cust', name: 'legacy-services-cust', redirect: { name: 'services' } },

        // Viejas secciones
        { path: '/pages',        name: 'legacy-pages',       redirect: { name: 'about' } },
        { path: '/pages/about',  name: 'legacy-pages-about', redirect: { name: 'about' } },
        { path: '/pages/team',   name: 'legacy-pages-team',  redirect: { name: 'about' } },
        { path: '/pages/pricing',name: 'legacy-pages-pricing', redirect: { name: 'why-choose-us' } },
        { path: '/pages/careers',name: 'legacy-pages-careers', redirect: { name: 'about' } },
        { path: '/pages/faq',    name: 'legacy-pages-faq',   redirect: { name: 'faq' } },

        // Blog/Shop ya no existen en TTS
        { path: '/blog', name: 'legacy-blog', redirect: '/' },
        { path: '/shop', name: 'legacy-shop', redirect: '/' },

        // Contacts -> Contact
        { path: '/contacts', name: 'legacy-contacts', redirect: { name: 'contact' } },

        // 404 catch-all
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: 'Page Not Found | TTS' } },
    ],
    scrollBehavior: () => ({ top: 0 }),
});



