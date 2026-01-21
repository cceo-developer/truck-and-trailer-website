import { createApp } from 'vue';
import { createPinia } from 'pinia';
import alvue from '@myshell/alvue';

import PrimeVue from 'primevue/config';
import PrimevueTheme from '@/config/primevue/primevue-theme.js';
import 'primeicons/primeicons.css';

import App from '@/App.vue';
import generateRouter from '@/router';

import '@/css/style.css';
import '@/css/flags.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

// PRIME VUE
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Select from 'primevue/select';
import InputMask from 'primevue/inputmask';

// CUSTOM COMPONENTS
import ResponsiveGuide from '@/components/widgets/ResponsiveGuide.vue';
import FormLabel from '@/components/widgets/forms/FormLabel.vue';

const pinia = createPinia();

const app = createApp(App);

app.use(generateRouter());
app.use(alvue);
app.use(PrimeVue, {...PrimevueTheme});
app.use(pinia);

app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Password', Password);
app.component('Checkbox', Checkbox);
app.component('Select', Select);
app.component('InputMask', InputMask);

app.component('ResponsiveGuide', ResponsiveGuide);
app.component('FormLabel', FormLabel);

app.mount('#app');
