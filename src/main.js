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

// COMPOSABLES
import { useAuth } from '@/composables/auth.js';

// PRIME VUE
import Tooltip from 'primevue/tooltip';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Select from 'primevue/select';
import InputMask from 'primevue/inputmask';
import InputOtp from 'primevue/inputotp';
import Popover from 'primevue/popover';
import Paginator from 'primevue/paginator';
import Skeleton from 'primevue/skeleton';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import DatePicker from 'primevue/datepicker';

// CUSTOM COMPONENTS
import ResponsiveGuide from '@/components/widgets/ResponsiveGuide.vue';
import FormLabel from '@/components/widgets/forms/FormLabel.vue';

const pinia = createPinia();
const auth = useAuth();

const app = createApp(App);

app.directive('tooltip', Tooltip);

app.use(generateRouter(auth));
app.use(alvue);
app.use(PrimeVue, { ...PrimevueTheme });
app.use(pinia);

app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Password', Password);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Select);
app.component('InputMask', InputMask);
app.component('InputOtp', InputOtp);
app.component('Popover', Popover);
app.component('Paginator', Paginator);
app.component('Skeleton', Skeleton);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('DatePicker', DatePicker);

app.component('ResponsiveGuide', ResponsiveGuide);
app.component('FormLabel', FormLabel);

app.mount('#app');
