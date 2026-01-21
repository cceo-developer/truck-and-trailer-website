<template>
    <div>
        <component :is="layout.current" />
    </div>
</template>


<script setup>
// IMPORTS
import { watch, computed } from 'vue';
import { useRoute } from 'vue-router';
// STORES
import { useLayoutStore } from '@/store/layout-store.js';
// ROUTES
import AUTH_ROUTES from '@/const/auth-routes.js';

const layout = useLayoutStore();

const route = useRoute();
const currentRoute = computed(() => route.name);

watch(() => route.name, () => {
    if(AUTH_ROUTES.includes(currentRoute.value)) {
        layout.setEmptyLayout();
    } else {
        layout.setDefaultLayout();
    }
}, {immediate: true});

</script>

<style scoped>
</style>
