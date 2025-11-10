<template>
    <div class="relative" data-dd ref="triggerRef">
        <button
            class="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            :class="active ? 'text-primary-500 font-semibold' : 'text-slate-700'"
            :aria-expanded="open ? 'true' : 'false'" aria-haspopup="true"
            @mouseenter="emit('open')" @mouseleave="scheduleClose" @focus="emit('open')">
            <slot name="label" />
            <i class="fa-solid fa-chevron-down text-xs"></i>
        </button>
        <Teleport to="body">
            <transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1">
                <div
                    v-if="open" ref="menuRef"
                    class="fixed z-[70] mt-0 rounded-2xl border border-slate-200 bg-white shadow-lg p-4"
                    :class="widthClass" :style="menuStyle"
                    @mouseenter="emit('open')" @mouseleave="scheduleClose">
                    <div :class="gridClass">
                        <slot />
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from "vue";
const props = defineProps({
    open: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    widthClass: { type: String, default: 'w-[28rem]' },      // ahora sí se aplica
    gridClass: { type: String, default: 'grid grid-cols-2 gap-3' },
})
const emit = defineEmits(['open', 'close'])

const triggerRef = ref(null)
const menuRef = ref(null)
const menuStyle = ref({ top: '0px', left: '0px', maxWidth: 'min(90vw, 36rem)' })

async function positionMenu () {
    await nextTick()
    const btn = triggerRef.value?.querySelector('button') || triggerRef.value
    const menu = menuRef.value
    if (!btn || !menu) return

    const rect = btn.getBoundingClientRect()
    const vw = window.innerWidth
    const gap = 12

    // Ancho real del menú ya renderizado (limitado por maxWidth/widthClass)
    const mw = Math.min(menu.offsetWidth || 0, vw * 0.9)

    // Si no cabe a la derecha, “flip” anclando por la derecha
    let left = rect.left
    if (left + mw > vw - 8) {
        left = Math.max(8, rect.right - mw)
    } else {
        left = Math.max(8, left)
    }
    const top = Math.round(rect.bottom + gap)

    menuStyle.value = { ...menuStyle.value, left: `${Math.round(left)}px`, top: `${top}px` }
}

function handleResizeScroll () {
    if (props.open) positionMenu()
}

let closeTimer = null
function scheduleClose () {
    clearTimeout(closeTimer)
    closeTimer = setTimeout(() => emit('close'), 120) // un poco más generoso
}

watch(() => props.open, (o) => {
    clearTimeout(closeTimer)
    if (o) {
        positionMenu()
        window.addEventListener('resize', handleResizeScroll, { passive: true })
        window.addEventListener('scroll', handleResizeScroll, { passive: true })
    } else {
        window.removeEventListener('resize', handleResizeScroll)
        window.removeEventListener('scroll', handleResizeScroll)
    }
})

onMounted(() => {})
onBeforeUnmount(() => {
    clearTimeout(closeTimer)
    window.removeEventListener('resize', handleResizeScroll)
    window.removeEventListener('scroll', handleResizeScroll)
})

</script>

<style scoped>

</style>