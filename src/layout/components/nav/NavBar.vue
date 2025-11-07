<template>
    <nav class="mx-auto max-w-7xl px-4" role="navigation" aria-label="Primary">
        <LeftSidebar :open="sidebarOpen" @close="closeSidebar">
            <!-- contenido del panel -->
            <section>
                <h4 class="text-sm uppercase tracking-wider text-slate-200">Contact</h4>
                <div class="mt-2 space-y-4 text-slate-200">
                    <div class="flex items-center gap-2"><i class="fa-solid fa-phone"></i> +1 234 567 890</div>
                    <div class="flex items-center gap-2"><i class="fa-solid fa-envelope"></i> info@transx.com</div>
                    <div class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> 1095 Columbus Ave</div>
                </div>
            </section>
            <section>
                <h4 class="text-sm uppercase tracking-wider text-slate-200">Working hours</h4>
                <ul class="mt-2 text-slate-200 text-sm space-y-4">
                    <li>Mon–Fri: 9:00–18:00</li>
                    <li>Sat: 10:00–16:00</li>
                    <li>Sun: Closed</li>
                </ul>
            </section>
            <div class="hidden md:flex items-center gap-2">
                <RouterLink
                    to="/quote"
                    class="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary-600 hover:bg-primary-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                    Get a Quote
                </RouterLink>
            </div>
        </LeftSidebar>
        <div :class="['sticky top-0 z-50 -mx-4 px-4 bg-white/80 backdrop-blur',
                  hasShadow ? 'shadow-sm border-b border-slate-200' : 'border-b border-transparent']">
            <div class="mx-auto max-w-7xl">
                <div class="flex items-center justify-between h-16">
                    <button
                        class="inline-flex items-center justify-center size-14 rounded-xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        @click="toggleSidebar" ref="sidebarBtnRef" aria-label="Abrir panel lateral">
                        <i class="fa-solid fa-bars-staggered text-2xl"></i>
                    </button>
                    <NavBrand />
                    <DesktopNav
                        :items="mainItems" :services="services"
                        :pages="pages" :openDd="openDd" @update:openDd="v => openDd = v"/>

                    <div class="hidden md:flex items-center gap-2">
                        <RouterLink
                            to="/quote"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary-600 hover:bg-primary-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                            Get a Quote
                        </RouterLink>
                    </div>

                    <button
                        class="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        @click="toggleMobile"
                        :aria-expanded="openMobile ? 'true' : 'false'" aria-controls="mobile-menu"
                        :aria-label="openMobile ? 'Cerrar menú' : 'Abrir menú'" ref="mobileBtnRef">
                        <i class="fa-solid" :class="openMobile ? 'fa-xmark' : 'fa-bars'"></i>
                    </button>
                </div>
            </div>
        </div>

        <MobileNav
            :open="openMobile"
            :items="mainItems"
            @close="closeMobile"
            @open-sidebar="openMobile=false; toggleSidebar()" />
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBrand from './NavBrand.vue'
import DesktopNav from './DesktopNav.vue'
import MobileNav from './MobileNav.vue'
import LeftSidebar from './LeftSidebar.vue'
import { mainItems as mainItems0, services as services0, pages as pages0 } from '@/layout/components/nav/menuItems.js'

const mainItems = mainItems0
const services = services0
const pages = pages0

const openMobile = ref(false)
const sidebarOpen = ref(false)
const openDd = ref(null) // 'services' | 'pages' | null
const hasShadow = ref(false)

const mobileBtnRef = ref(null)
const sidebarBtnRef = ref(null)

/* scroll shadow */
const onScroll = () => { hasShadow.value = window.scrollY > 4 }

function toggleMobile() { openMobile.value = !openMobile.value }
function closeMobile()   { openMobile.value = false }

function toggleSidebar() { sidebarOpen.value = !sidebarOpen.value }
function closeSidebar()  { sidebarOpen.value = false }

/* cerrar dropdowns al click afuera */
function onDocClick(e) {
    if (!openDd.value) return
    const path = e.composedPath?.() ?? []
    const inside = path.some((n) => n instanceof HTMLElement && n.closest?.('[data-dd]'))
    if (!inside) openDd.value = null
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onDocClick)
    onScroll()
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onDocClick)
})
</script>

<style scoped>
.fade-enter-active .fade-leave-active {
    transition: opacity .2s;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>