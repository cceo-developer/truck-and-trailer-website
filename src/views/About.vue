<template>
    <div>
        <!-- Hero -->
        <section class="bg-slate-900 text-slate-100">
            <div class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <span class="text-sm tracking-widest uppercase text-primary-300">About TTS</span>
                    <h1 class="mt-2 text-3xl md:text-4xl font-bold">
                        Premium Truck & Trailer Storage in San Antonio, TX
                    </h1>
                    <p class="mt-4 text-slate-300">
                        Since 2014, we’ve provided secure, flexible storage solutions for transporters of all sizes
                        across four expansive terminals. Our client-centric team safeguards your assets and keeps your
                        operations moving—24/7.
                    </p>

                    <div class="mt-6 flex flex-wrap gap-3">
                        <RouterLink
                            to="/quote"
                            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium">
                            Get a Quote
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </RouterLink>
                        <RouterLink
                            to="/locations"
                            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary-400 text-primary-300 hover:bg-white/5 font-medium">
                            View Locations
                            <i class="fa-solid fa-map-location-dot"></i>
                        </RouterLink>
                    </div>
                </div>

                <!-- Hero image placeholder; reemplaza con una foto de terminal -->
                <div class="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-800 aspect-[16/10] md:aspect-auto">
                    <img v-if="hero" :src="hero" alt="TTS facilities" class="w-full h-full object-cover"/>
                    <div v-else class="w-full h-full grid place-content-center text-slate-400">
                        <i class="fa-solid fa-warehouse text-5xl mb-3"></i>
                        <p>Facility photo placeholder</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission & Values -->
        <section class="py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-10">
                <div class="md:col-span-5">
                    <span class="block text-sm tracking-widest uppercase text-primary-600">Our Mission & Values</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">
                        Built around your needs, since 2014
                    </h2>
                    <p class="mt-3 text-slate-600">
                        We provide dependable, professional storage for trucks, semi-trailers, containers and
                        medium-to-heavy duty equipment. Whether you run one vehicle or an entire fleet, our goal is to
                        deliver peace of mind through secure facilities, simple access and responsive support.
                    </p>
                </div>

                <div class="md:col-span-7 grid sm:grid-cols-2 gap-6">
                    <article class="rounded-xl border border-slate-200 p-6 bg-white">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Client-Centric</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Dedicated account managers, tailored solutions and clear communication to keep you always informed.
                        </p>
                    </article>

                    <article class="rounded-xl border border-slate-200 p-6 bg-white">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Security First</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            24/7 surveillance, gated & fenced access, login/logout controls and on-site staff.
                        </p>
                    </article>

                    <article class="rounded-xl border border-slate-200 p-6 bg-white">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Strategic Locations</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Four terminals across San Antonio with easy access to major routes and industrial hubs.
                        </p>
                    </article>

                    <article class="rounded-xl border border-slate-200 p-6 bg-white">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-handshake"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Flexible Terms</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Short & long-term options—daily, monthly or yearly—plus dedicated parking (no stacking delays).
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- What we do -->
        <section class="py-16 md:py-24 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4">
                <header class="max-w-3xl">
                    <span class="block text-sm tracking-widest uppercase text-primary-600">What We Do</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Storage & Support for Your Fleet</h2>
                    <p class="mt-3 text-slate-600">
                        From day-to-day storage to value-added maintenance, we help you operate efficiently and safely.
                    </p>
                </header>

                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <article class="rounded-xl border border-slate-200 bg-white p-6">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-truck"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Fleet Storage</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Short & long-term storage with daily, monthly or yearly rates for trucks, trailers and equipment.
                        </p>
                    </article>

                    <article class="rounded-xl border border-slate-200 bg-white p-6">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Private Yards</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Dedicated yard space for entire fleets at four convenient terminals.
                        </p>
                    </article>

                    <article class="rounded-xl border border-slate-200 bg-white p-6">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-building"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Office & Warehouse</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Flexible office and/or warehouse space to support your operations.
                        </p>
                    </article>

                    <article class="rounded-xl border border-slate-200 bg-white p-6">
                        <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                        </div>
                        <h3 class="mt-4 font-semibold">Vehicle Maintenance</h3>
                        <p class="mt-2 text-sm text-slate-600">
                            Cleaning, battery charging, tire pressure checks and preventive maintenance on demand.
                        </p>
                    </article>
                </div>

                <div class="mt-8">
                    <RouterLink
                        to="/services"
                        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium">
                        Explore Services
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- Locations highlight -->
        <section class="py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                    <span class="block text-sm tracking-widest uppercase text-primary-600">Locations</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Four Dedicated Terminals</h2>
                    <p class="mt-3 text-slate-600">
                        5169 & 5246 Randolph Blvd · 5126 Sherri Ann Rd · 12815 S. Zarzamora St — all with 24/7 secured access.
                    </p>

                    <ul class="mt-6 space-y-2 text-sm text-slate-700">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-location-dot mt-1"></i><span>Proximity to major routes & hubs</span></li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-id-card mt-1"></i><span>Login/Logout access controls</span></li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-video mt-1"></i><span>Continuous surveillance & on-site staff</span></li>
                    </ul>

                    <RouterLink
                        to="/locations"
                        class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium">
                        View All Locations
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </RouterLink>
                </div>

                <!-- Tres placeholders de galería; reemplaza cuando tengas fotos de terminal -->
                <div class="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="rounded-xl overflow-hidden bg-slate-100 aspect-[16/10]"></div>
                    <div class="rounded-xl overflow-hidden bg-slate-100 aspect-[16/10]"></div>
                    <div class="rounded-xl overflow-hidden bg-slate-100 aspect-[16/10]"></div>
                </div>
            </div>
        </section>

        <!-- CTA final -->
        <section class="py-14 bg-slate-900 text-slate-100">
            <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold">Ready to secure your fleet?</h3>
                    <p class="mt-2 text-slate-300">
                        Book storage with flexible terms—daily, monthly or yearly—backed by 24/7 secured access.
                    </p>
                </div>
                <div class="flex gap-3">
                    <RouterLink
                        to="/quote"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium">
                        Get a Quote
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </RouterLink>
                    <RouterLink
                        to="/contact"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-medium">
                        Contact Us
                        <i class="fa-solid fa-paper-plane"></i>
                    </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Reemplaza con la ruta real de tu imagen de hero si ya la tienes
// import heroImg from '@/assets/locations/tts-hero.jpg'
const hero = ref('') // heroImg || ''

onMounted(() => {
    document.title = 'About TTS | Truck & Trailer Storage'
})
</script>

<style scoped>

</style>