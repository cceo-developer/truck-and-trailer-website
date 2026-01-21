import { defineStore } from "pinia";
import { shallowRef } from "vue";

// LAYOUTS
import EmptyLayout from '@/layout/EmptyLayout.vue';
import DefaultLayout from '@/layout/DefaultLayout.vue';

export const useLayoutStore = defineStore('layouts', () => {

    const current = shallowRef(DefaultLayout);

    const setEmptyLayout = () => (current.value = EmptyLayout);
    const setDefaultLayout = () => (current.value = DefaultLayout);

    return {current, setEmptyLayout, setDefaultLayout};
});