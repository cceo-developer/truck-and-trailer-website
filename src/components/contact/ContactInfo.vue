<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-full">
        <h3 class="text-xl font-semibold text-slate-800">Contact & Hours</h3>

        <div class="mt-5 space-y-4 text-slate-700">
            <div class="flex items-start gap-3">
                <i class="fa-solid fa-phone text-primary-600 mt-1"></i>
                <div>
                    <div class="text-sm uppercase tracking-wide text-slate-500">Phone</div>
                    <a :href="`tel:${CONTACT.phone}`" class="font-medium hover:underline">{{ CONTACT.phone }}</a>
                </div>
            </div>

            <div class="flex items-start gap-3">
                <i class="fa-solid fa-envelope text-primary-600 mt-1"></i>
                <div>
                    <div class="text-sm uppercase tracking-wide text-slate-500">Email</div>
                    <a :href="`mailto:${CONTACT.email}`" class="font-medium hover:underline">{{ CONTACT.email }}</a>
                </div>
            </div>

            <div class="flex items-start gap-3">
                <i class="fa-solid fa-location-dot text-primary-600 mt-1"></i>
                <div>
                    <div class="text-sm uppercase tracking-wide text-slate-500">Main Office</div>
                    <p class="font-medium">{{ CONTACT.address }}</p>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h4 class="text-sm uppercase tracking-wide text-slate-500">Office Hours</h4>
            <ul class="mt-3 divide-y divide-slate-200 rounded-lg border border-slate-200 overflow-hidden">
                <li v-for="(val, key) in OFFICE_HOURS" :key="key" class="flex items-center justify-between px-4 py-2">
                    <span class="font-medium text-slate-800">{{ val.label+':' }} {{}} {{ val.value }}</span>
                </li>
            </ul>
        </div>

        <div class="mt-8 flex flex-col gap-3">
            <a
                :href="CONTACT.directionsUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
                <i class="fa-solid fa-turn-up"></i>
                Get Directions
            </a>
            <a
                :href="`tel:${CONTACT.phone}`"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800">
                <i class="fa-solid fa-phone"></i>
                Call Now
            </a>
        </div>
    </div>
</template>

<script setup>

import { CONTACT, OFFICE_HOURS } from '@/const/locations.js'


</script>

<style scoped>

</style>