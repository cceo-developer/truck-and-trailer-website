<template>
    <button 
        type="button" class="flex items-center gap-x-1 hover:bg-primary-100 px-2 py-1 rounded-lg"
        @mouseenter="openPopover"
        @mouseleave="scheduleClose">
        Hi, <span class="first-letter:capitalize lowercase">{{ auth.user.short_name }}</span>
        <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem;" />
    </button>
    <Popover 
        ref="popover" :pt="{content: {class: '!p-5'}, root: {class: '!rounded-xl'}}"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose">
        <div class="grid grid-cols-2 gap-4">
            <template v-for="(section, index) in CUSTOMER_SECTIONS" :key="`customer_section.${index}`">
                <RouterLink :to="{name: section.route}">
                    <div class="hover:bg-zinc-200 p-3 rounded-lg">
                        <div class="flex items-center gap-x-3">
                            <div class="p-2 bg-[#FFF2E3] rounded-lg">
                                <div class="text-primary-500">
                                    <i :class="`${section.icon}`" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{ section.title }}</div>
                                <div class="text-sm text-zinc-600">{{ section.description }}</div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </template>
        </div>
    </Popover>
</template>

<script setup>
// COMPOSABLES
import { ref } from "vue";
import { useAuth } from '@/composables/auth.js';

const auth = useAuth();

const CUSTOMER_SECTIONS = [
    {route: 'vehicles', icon: 'fa-solid fa-truck', title: 'My vehicles', description: 'Manage registered vehicles'},
    {route: 'driver-licenses', icon: 'fa-solid fa-id-card', title: 'My driver licenses', description: 'Review driver licenses'},
    {route: 'payment-methods', icon: 'fa-solid fa-credit-card', title: 'My payment methods', description: 'Manage saved payment methods'}
];

const popover = ref(null);
let closeTimeout = null;

const openPopover = (event) => {
    cancelClose();
    popover.value.toggle(event);
}

const scheduleClose = () => {
    cancelClose();
    closeTimeout = setTimeout(() => {
        popover.value.hide();
    }, 150);
}

const cancelClose = () => {
    if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
    }
}

</script>