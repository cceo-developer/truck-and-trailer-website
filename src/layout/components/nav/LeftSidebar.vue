<template>
    <div>
        <!-- overlay -->
        <transition enter-active-class="transition-opacity duration-150"
                    leave-active-class="transition-opacity duration-150">
            <div v-if="open"
                 class="fixed inset-0 z-[60] bg-black/40"
                 @click="$emit('close')" />
        </transition>

        <!-- panel -->
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full">
            <aside v-if="open"
                   class="fixed left-0 top-0 h-dvh w-full sm:w-[20rem] z-[70] bg-[#31373f] translate-x-0 will-change-transform"
                   role="dialog" aria-modal="true" ref="panelRef"
                   @keydown.esc.prevent.stop="$emit('close')">
                <div class="flex items-center px-8 py-3">
                    <button
                        class="h-9 w-9 inline-flex items-center justify-center rounded-lg text-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
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