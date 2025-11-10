<template>
    <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in simpleItems" :key="item.to">
            <RouterLink :to="item.to" :class="linkClass(item.to)">{{ item.label }}</RouterLink>
        </li>

        <!-- Services -->
        <li v-if="hasServices">
            <NavDropdownMenu
                :open="openDd==='services'"
                :active="isActive('/services')"
                @open="openDd='services'"
                @close="openDd=null">
                <template #label>Services</template>
                <RouterLink
                    v-for="it in services"
                    :key="it.to"
                    :to="it.to"
                    class="group rounded-xl p-3 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                >
                    <div class="flex items-start gap-3">
                        <div class="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500">
                            <i :class="it.icon"></i>
                        </div>
                        <div>
                            <div class="font-semibold group-hover:text-primary-500">{{ it.label }}</div>
                            <div class="text-sm text-slate-600">{{ it.desc }}</div>
                        </div>
                    </div>
                </RouterLink>
            </NavDropdownMenu>
        </li>

        <!-- Pages -->
        <li v-if="hasPages">
            <NavDropdownMenu
                :open="openDd==='pages'"
                :active="isActive('/pages')"
                widthClass="w-[36rem]"
                gridClass="grid grid-cols-3 gap-3"
                @open="openDd='pages'"
                @close="openDd=null"
            >
                <template #label>Pages</template>
                <RouterLink
                    v-for="pg in pages"
                    :key="pg.to"
                    :to="pg.to"
                    class="rounded-xl p-3 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                >
                    <div class="font-semibold">{{ pg.label }}</div>
                    <div class="text-sm text-slate-600">{{ pg.desc }}</div>
                </RouterLink>
            </NavDropdownMenu>
        </li>
    </ul>
</template>

<script setup>

import {useRoute} from "vue-router";
import {computed} from "vue";
import NavDropdownMenu from "@/layout/components/nav/NavDropdownMenu.vue";

const props = defineProps({
    items: { type: Array, required: true },
    services: { type: Array, default: () => [] },
    pages: { type: Array, default: () => [] },
    openDd: { type: String, default: null }, // 'services' | 'pages' | null
});

const emit = defineEmits(['update:openDd']);

const route = useRoute();

const isActive = (path) => (path === '/' ? route.path === '/' : route.path.startsWith(path));

const linkClass = (path) => {
    const base = 'px-2 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-primary-500'
    return isActive(path) ? `text-primary-500 font-semibold ${base}` : `text-slate-700 hover:bg-primary-100 ${base}`
}

const hasServices = computed(() => props.services?.length)
const hasPages = computed(() => props.pages?.length)
const simpleItems = computed(() => props.items.filter(i => !i.dd))
const openDd = computed({
    get: () => props.openDd,
    set: (v) => emit('update:openDd', v),
})

</script>

<style scoped>

</style>