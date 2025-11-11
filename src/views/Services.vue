<template>
    <div>
        <!-- Hero -->
        <section class="bg-slate-900 text-slate-100">
            <div class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <span class="text-sm tracking-widest uppercase text-primary-300">Services</span>
                    <h1 class="mt-2 text-3xl md:text-4xl font-bold">Premium Fleet Storage & Support</h1>
                    <p class="mt-4 text-slate-300">
                        Secure, flexible and client-centric storage for trucks, trailers, containers and work equipment,
                        with options that scale from a single vehicle to entire fleets.
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

                <!-- Hero image -->
                <div class="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-800 aspect-[16/10] md:aspect-auto">
                    <img v-if="hero" :src="hero" alt="TTS services hero" class="w-full h-full object-cover" />
                    <div v-else class="w-full h-full grid place-content-center text-slate-400">
                        <i class="fa-solid fa-warehouse text-5xl mb-3"></i>
                        <p>Services photo placeholder</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Grid (overview) -->
        <section class="py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-4">
                <header class="max-w-3xl">
                    <span class="block text-sm tracking-widest uppercase text-primary-600">What we offer</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Tailored solutions for transporters of all sizes</h2>
                    <p class="mt-3 text-slate-600">
                        Short & long-term storage (daily, monthly, yearly), private yards, office/warehouse options,
                        and value-added maintenance to keep your assets ready.
                    </p>
                </header>

                <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <RouterLink
                        v-for="svc in overview" :key="svc.id" :to="mode === 'route' ? {name: svc.routeName} :{ hash: `#${svc.id}`} "
                        class="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition bg-white">
                        <div class="size-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-700">
                            <i :class="svc.icon"></i>
                        </div>
                        <h3 class="mt-4 text-lg font-semibold">{{ svc.title }}</h3>
                        <p class="mt-2 text-slate-600 text-sm">{{ svc.desc }}</p>
                        <span class="mt-4 inline-flex items-center gap-2 text-primary-700">
                            Learn more
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </span>
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- Detailed Sections -->
        <section id="fleet-storage" class="py-16 md:py-24 bg-slate-50 scroll-mt-20">
            <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
                <div class="order-2 lg:order-1">
                    <span class="text-sm tracking-widest uppercase text-primary-600">Service</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Fleet Storage Solutions</h2>
                    <p class="mt-3 text-slate-600">
                        Secure storage for trucks, semi-trailers, box trucks, containers and equipment with dedicated parking
                        (no stacking delays) and 24/7 secured access.
                    </p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Daily, monthly & yearly rates</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Login / Logout access controls</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Surveillance, gated & fenced facilities</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Dedicated account manager</li>
                    </ul>
                    <div class="mt-6 flex gap-3">
                        <RouterLink to="/services/fleet-storage" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-700 hover:bg-primary-50">
                            Learn more <i class="fa-solid fa-arrow-right-long"></i>
                        </RouterLink>
                        <RouterLink to="/quote" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white">
                            Get a Quote <i class="fa-solid fa-paper-plane"></i>
                        </RouterLink>
                    </div>
                </div>
                <div class="order-1 lg:order-2 rounded-2xl overflow-hidden bg-white border border-slate-200">
                    <img v-if="imgFleet" :src="imgFleet" alt="Fleet storage" class="w-full h-full object-cover" />
                    <div v-else class="aspect-[16/10] bg-slate-100"></div>
                </div>
            </div>
        </section>

        <section id="private-yard" class="py-16 md:py-24 scroll-mt-20">
            <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
                <div class="rounded-2xl overflow-hidden bg-white border border-slate-200">
                    <img v-if="imgYard" :src="imgYard" alt="Private yard storage" class="w-full h-full object-cover" />
                    <div v-else class="aspect-[16/10] bg-slate-100"></div>
                </div>
                <div>
                    <span class="text-sm tracking-widest uppercase text-primary-600">Service</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Private Yard Storage</h2>
                    <p class="mt-3 text-slate-600">
                        Dedicated yard areas for entire fleets across four convenient terminals—easy access to major routes and hubs.
                    </p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Assigned areas per customer</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> 24/7 secured access</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> On-site staff & surveillance</li>
                    </ul>
                    <div class="mt-6 flex gap-3">
                        <RouterLink to="/services/private-yard" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-700 hover:bg-primary-50">
                            Learn more <i class="fa-solid fa-arrow-right-long"></i>
                        </RouterLink>
                        <RouterLink to="/quote" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white">
                            Get a Quote <i class="fa-solid fa-paper-plane"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>

        <section id="office-space" class="py-16 md:py-24 bg-slate-50 scroll-mt-20">
            <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
                <div class="order-2 lg:order-1">
                    <span class="text-sm tracking-widest uppercase text-primary-600">Service</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Office & Warehouse Rentals</h2>
                    <p class="mt-3 text-slate-600">
                        Flexible office and/or warehouse space to support your operations—training rooms, private offices,
                        restrooms and yard adjacency when needed.
                    </p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Suites & open shop options</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Power (110/220V), bay doors (per building)</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> High ceilings, A/C & Heating (per suite)</li>
                    </ul>
                    <div class="mt-6 flex gap-3">
                        <RouterLink to="/services/office-space" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-700 hover:bg-primary-50">
                            Learn more <i class="fa-solid fa-arrow-right-long"></i>
                        </RouterLink>
                        <RouterLink to="/quote" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white">
                            Get a Quote <i class="fa-solid fa-paper-plane"></i>
                        </RouterLink>
                    </div>
                </div>
                <div class="order-1 lg:order-2 rounded-2xl overflow-hidden bg-white border border-slate-200">
                    <img v-if="imgOffice" :src="imgOffice" alt="Office and warehouse" class="w-full h-full object-cover" />
                    <div v-else class="aspect-[16/10] bg-slate-100"></div>
                </div>
            </div>
        </section>

        <section id="maintenance" class="py-16 md:py-24 scroll-mt-20">
            <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
                <div class="rounded-2xl overflow-hidden bg-white border border-slate-200">
                    <img v-if="imgMaint" :src="imgMaint" alt="Vehicle maintenance" class="w-full h-full object-cover" />
                    <div v-else class="aspect-[16/10] bg-slate-100"></div>
                </div>
                <div>
                    <span class="text-sm tracking-widest uppercase text-primary-600">Service</span>
                    <h2 class="mt-2 text-2xl md:text-3xl font-bold">Vehicle Maintenance (On Demand)</h2>
                    <p class="mt-3 text-slate-600">
                        Value-added services that improve uptime and driver experience—so your fleet stays ready, day and night.
                    </p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Cleaning & basic checks</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Battery charging & tire pressure</li>
                        <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check mt-1"></i> Preventive maintenance coordination</li>
                    </ul>
                    <div class="mt-6 flex gap-3">
                        <RouterLink to="/services/maintenance" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-700 hover:bg-primary-50">
                            Learn more <i class="fa-solid fa-arrow-right-long"></i>
                        </RouterLink>
                        <RouterLink to="/quote" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white">
                            Get a Quote <i class="fa-solid fa-paper-plane"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom CTA -->
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

/**
 * IMÁGENES:
 * Reemplaza estos refs con tus rutas reales.
 * Puedes reutilizar las fotos de Zarzamora que ya tienes:
 *  - BLDG-5 (warehouse) -> imgFleet
 *  - BLDG-4 (open shop)  -> imgYard
 *  - BLDG-3A (suite)     -> imgOffice
 *  - (o sube nuevas a /src/assets/services/)
 */
// import heroImg   from '@/assets/services/hero.jpg'
// import fleetImg  from '@/assets/locations/zarzamora-bldg5.jpg'
// import yardImg   from '@/assets/locations/zarzamora-bldg4.jpg'
// import officeImg from '@/assets/locations/zarzamora-bldg3a.jpg'
// import maintImg  from '@/assets/services/maintenance.jpg'

const hero     = ref('') // heroImg || ''
const imgFleet = ref('') // fleetImg || ''
const imgYard  = ref('') // yardImg || ''
const imgOffice= ref('') // officeImg || ''
const imgMaint = ref('') // maintImg || ''

const mode = ref('route');

const overview = [
    {
        id: 'fleet-storage',
        title: 'Fleet Storage',
        desc: 'Secure, flexible storage for trucks, trailers & equipment.',
        icon: 'fa-solid fa-truck',
        routeName: 'services-fleet-storage',
    },
    {
        id: 'private-yard',
        title: 'Private Yard Storage',
        desc: 'Dedicated yard areas for entire fleets at 4 terminals.',
        icon: 'fa-solid fa-warehouse',
        routeName: 'services-private-yard',
    },
    {
        id: 'office-space',
        title: 'Office & Warehouse',
        desc: 'Flexible suites and open shop/warehouse options.',
        icon: 'fa-solid fa-building',
        routeName: 'services-office-space',
    },
    {
        id: 'maintenance',
        title: 'Vehicle Maintenance',
        desc: 'On-demand checks to keep your assets ready.',
        icon: 'fa-solid fa-screwdriver-wrench',
        routeName: 'services-maintenance',
    },
]

onMounted(() => {
    document.title = 'Services | Truck & Trailer Storage'
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta')
    meta.name = 'description';
    meta.content = 'Secure fleet storage in San Antonio: private yards, office/warehouse rentals, and light maintenance. 24/7 access across multiple terminals.'
    if (!meta.parentNode) document.head.appendChild(meta);
})
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

</style>