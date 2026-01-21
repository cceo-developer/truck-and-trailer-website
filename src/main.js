import { createApp } from 'vue';
import { createPinia } from 'pinia';
import alvue from '@myshell/alvue';

import PrimeVue from 'primevue/config';
import PrimevueTheme from '@/config/primevue/primevue-theme.js'

import App from '@/App.vue';
import generateRouter from '@/router';

import '@/css/style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// PRIME VUE
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

const pinia = createPinia();

const app = createApp(App);

app.use(generateRouter());
app.use(alvue);
app.use(PrimeVue, {...PrimevueTheme});
app.use(pinia);

app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Password', Password);

app.mount('#app');
