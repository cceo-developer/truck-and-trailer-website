<template>
    <div>
        <!-- overlay -->
        <transition
            appear
            enter-active-class="transition-opacity duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="open"
                 class="fixed inset-0 z-[60] bg-black/40"
                 @click="$emit('close')" />
        </transition>

        <!-- panel -->
        <transition
            appear
            enter-active-class="transition-transform duration-200 ease-out"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-transform duration-200 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full">
            <aside
                v-if="open" role="dialog" aria-modal="true" ref="panelRef"
                class="fixed left-0 top-0 h-dvh w-full sm:w-[22rem] z-[70] bg-[#31373f] will-change-transform"
                @keydown.esc.prevent.stop="$emit('close')">
                <div class="flex items-center px-8 py-3">
                    <button
                        class="h-9 w-9 inline-flex items-center justify-center rounded-lg text-white hover:text-black cursor-pointer hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        @click="$emit('close')" aria-label="Cerrar panel">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="px-14 py-4 space-y-10 overflow-y-auto h-[calc(100dvh-56px)]">
                    <slot />
                </div>
            </aside>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ open: { type: Boolean, default: false } })
defineEmits(['close'])

const panelRef = ref(null);

</script>

<style scoped>

</style>