<template>
    <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
        <div
            v-if="open" id="mobile-menu"
            class="md:hidden mt-3 bg-white rounded-2xl border border-slate-200 shadow-sm" role="dialog"
            aria-modal="true" @keydown.esc.prevent.stop="$emit('close')">
            <div class="p-3" ref="panelRef">
                <ul class="flex flex-col">
                    <li v-for="item in items" :key="item.to">
                        <RouterLink
                            :to="item.to"
                            class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                            :class="isActive(item.to) ? 'text-primary-700 font-semibold' : 'text-slate-700'"
                            @click="$emit('close')">
                            <span>{{ item.label }}</span>
                            <i v-if="isActive(item.to)" class="fa-solid fa-circle text-[6px]"></i>
                        </RouterLink>
                    </li>
                </ul>

                <div class="mt-3 border-t pt-3 flex items-center gap-2">
                    <button
                        @click="$emit('open-sidebar')"
                        class="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50"
                        aria-label="Abrir panel lateral">
                        <i class="fa-solid fa-sliders"></i>
                    </button>
                    <RouterLink
                        to="/quote"
                        class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium"
                        @click="$emit('close')">
                        Get a Quote
                        <i class="fa-solid fa-arrow-right-long text-sm"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
    open: { type: Boolean, default: false },
    items: { type: Array, required: true },
})

defineEmits(['close', 'open-sidebar']);

const panelRef = ref(null)
const route = useRoute()

const isActive = (path) => (path === '/' ? route.path === '/' : route.path.startsWith(path))
</script>

<style scoped>

</style>