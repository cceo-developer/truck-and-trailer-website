<template>
    <div v-if="loc" class="min-h-screen">
        <section class="bg-slate-900 text-slate-100">
            <div class="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <span class="text-sm tracking-widest uppercase text-primary-300">Terminal</span>
                    <h1 class="text-3xl md:text-4xl font-bold mt-2">{{ loc.name }}</h1>
                    <p class="text-slate-300 mt-2">{{ loc.address }}</p>

                    <ul class="mt-5 space-y-2 text-slate-200">
                        <li v-for="f in loc.features" :key="f" class="flex items-start gap-3">
                            <i class="fa-solid fa-check mt-1"></i>
                            <span>{{ f }}</span>
                        </li>
                    </ul>

                    <div class="mt-6 flex flex-wrap gap-3">
                        <a :href="`tel:${CONTACT.phone.replace(/[^0-9]/g,'')}`"
                           class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800">
                            <i class="fa-solid fa-phone"></i> {{ CONTACT.phone }}
                        </a>
                        <a :href="`mailto:${CONTACT.email}`"
                           class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800">
                            <i class="fa-solid fa-envelope"></i> {{ CONTACT.email }}
                        </a>
                        <RouterLink to="/quote"
                                    class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white">
                            Get a Quote <i class="fa-solid fa-arrow-right-long"></i>
                        </RouterLink>
                    </div>
                </div>

                <div class="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
                    <img v-if="loc.hero" :src="loc.hero" :alt="loc.name" class="w-full h-full object-cover" />
                    <div v-else class="aspect-[16/9] bg-slate-800"></div>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-4 py-10">
            <div class="grid md:grid-cols-3 gap-6">
                <div class="md:col-span-2">
                    <h2 class="text-xl font-semibold">Gallery</h2>
                    <div class="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div v-for="(img, i) in loc.gallery" :key="i" class="rounded-lg overflow-hidden bg-slate-100">
                            <img :src="img" :alt="`${loc.name} ${i+1}`" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <aside>
                    <h3 class="text-xl font-semibold">Office Hours</h3>
                    <ul class="mt-3 text-slate-700">
                        <li v-for="row in OFFICE_HOURS" :key="row.label" class="flex justify-between border-b py-2">
                            <span class="font-medium">{{ row.label }}</span>
                            <span>{{ row.value }}</span>
                        </li>
                    </ul>
                    <div class="mt-4 text-sm text-slate-600">
                        Secure gated access · 24/7 surveillance
                    </div>
                </aside>
            </div>

            <!-- Zarzamora spaces -->
            <div v-if="loc.slug === 'zarzamora-12815'" class="mt-12">
                <h2 class="text-xl font-semibold">Available Spaces at Zarzamora</h2>
                <div class="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article
                        v-for="sp in loc.spaces"
                        :key="sp.code"
                        class="rounded-xl border border-slate-200 bg-white overflow-hidden"
                    >
                        <div class="aspect-[16/10] bg-slate-100">
                            <img v-if="sp.image" :src="sp.image" :alt="sp.code" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-5">
                            <h3 class="font-semibold">{{ sp.code }}</h3>
                            <p class="text-sm text-slate-600 mt-1">{{ sp.size }}</p>
                            <ul class="mt-3 text-sm text-slate-700 space-y-1">
                                <li v-for="b in sp.bullets" :key="b" class="flex items-start gap-2">
                                    <i class="fa-solid fa-circle-check mt-1"></i>
                                    <span>{{ b }}</span>
                                </li>
                            </ul>
                            <RouterLink
                                to="/contact"
                                class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-700 hover:bg-primary-50"
                            >
                                Request Info <i class="fa-solid fa-paper-plane"></i>
                            </RouterLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>

    <div v-else class="max-w-7xl mx-auto px-4 py-16">
        <p class="text-slate-600">Location not found.</p>
        <RouterLink to="/locations" class="text-primary-700 underline">Back to Locations</RouterLink>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { LOCATIONS, CONTACT, OFFICE_HOURS } from '@/const/locations.js'

const route = useRoute()
const loc = computed(() => LOCATIONS.find(l => l.slug === route.params.terminalSlug))

onMounted(() => {
    if (loc.value) document.title = `${loc.value.name} | TTS Locations`
})
</script>

<style scoped>

</style>