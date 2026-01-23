<template>
    <div v-if="!loadingUserData">
        <component :is="layout.current" />
    </div>
</template>


<script setup>
// IMPORTS
import { watch, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
// COMPOSABLES
import {useAuth} from '@/composables/auth.js';
// STORES
import {useLayoutStore} from '@/store/layout-store.js';
// SERVICES
import {getAuthUser} from '@/services/auth/oauth-services.js';
// ROUTES
import AUTH_ROUTES from '@/const/auth-routes.js';

const auth = useAuth();
const layout = useLayoutStore();

const route = useRoute();
const currentRoute = computed(() => route.name);

const loadingUserData = ref(true);
let authLoaded = false;

const refreshUserData = () => {
    if(!authLoaded && auth) {
        getAuthUser().then((response) => {
            localStorage.auth = btoa(JSON.stringify({
                ...response,
                access_token: auth.access_token
            }));
			
            loadingUserData.value = false;
        });
        authLoaded = true;
    } else {
        loadingUserData.value = false;
    }
}

refreshUserData();

watch(() => route.name, () => {
    if([...AUTH_ROUTES, 'verify-phone'].includes(currentRoute.value)) {
        layout.setEmptyLayout();
    } else {
        layout.setDefaultLayout();
    }
}, {immediate: true});

</script>

<style scoped>
</style>
