<template>
    <div class="max-w-7xl mx-auto px-4 py-12">
        <header class="max-w-3xl">
            <span class="block text-sm tracking-widest uppercase text-primary-600">Locations</span>
            <h1 class="text-3xl md:text-4xl font-bold mt-2">Four secure terminals across San Antonio</h1>
            <p class="text-slate-600 mt-3">
                24/7 secured access, surveillance and gated facilities. Pick the terminal that best fits your routes.
            </p>
        </header>
        <section class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
                v-for="loc in LOCATIONS"
                :key="loc.slug"
                class="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition"
            >
                <div class="aspect-[16/9] bg-slate-100">
                    <img v-if="loc.hero" :src="loc.hero" :alt="loc.name" class="w-full h-full object-cover" />
                </div>
                <div class="p-5">
                    <h2 class="text-lg font-semibold">{{ loc.name }}</h2>
                    <p class="text-slate-600 text-sm mt-1">{{ loc.address }}</p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li v-for="f in loc.features.slice(0,3)" :key="f" class="flex items-start gap-2">
                            <i class="fa-solid fa-shield-halved mt-0.5"></i>
                            <span>{{ f }}</span>
                        </li>
                    </ul>
                    <RouterLink
                        :to="`/locations/${loc.slug}`"
                        class="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-600 text-primary-700 hover:bg-primary-50"
                    >
                        View details
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </RouterLink>
                </div>
            </article>
        </section>
        <aside class="mt-12 rounded-xl border border-slate-200 bg-white p-6">
            <div class="grid md:grid-cols-3 gap-6 items-center">
                <div>
                    <h3 class="text-xl font-semibold">Need help choosing a terminal?</h3>
                    <p class="text-slate-600 mt-2">
                        Call us at <strong>{{ CONTACT.phone }}</strong> or send an email to
                        <a class="underline" :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a>.
                    </p>
                </div>
                <ul class="text-sm text-slate-700">
                    <li v-for="row in OFFICE_HOURS" :key="row.label" class="flex items-center gap-3">
                        <i class="fa-regular fa-clock"></i>
                        <span class="w-20 font-medium">{{ row.label }}:</span>
                        <span>{{ row.value }}</span>
                    </li>
                </ul>
                <RouterLink
                    to="/quote"
                    class="md:justify-self-end inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium"
                >
                    Get a Quote
                    <i class="fa-solid fa-arrow-right-long"></i>
                </RouterLink>
            </div>
        </aside>
    </div>
</template>

<script setup>
import { LOCATIONS, CONTACT, OFFICE_HOURS } from '@/const/locations.js'
</script>


<style scoped>

</style>