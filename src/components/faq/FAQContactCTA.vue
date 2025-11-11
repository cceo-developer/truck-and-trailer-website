<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-xl font-semibold text-slate-800">
            Still have questions?
        </h3>
        <p class="text-slate-600 mt-1">
            Our team is here to help with availability, pricing, and terminal details.
        </p>
        <div class="mt-5 space-y-3">
            <a
                :href="`tel:${CONTACT.phone}`"
                class="flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white hover:bg-slate-800">
                <i class="fa-solid fa-phone" />
                Call {{ CONTACT.phone }}
            </a>
            <a
                :href="`mailto:${CONTACT.email}`"
                class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 font-medium text-slate-700 hover:bg-slate-50">
                <i class="fa-solid fa-envelope" />
                Email {{ CONTACT.email }}
            </a>
        </div>
        <div class="mt-6 grid gap-3">
            <RouterLink
                to="/quote"
                class="text-center rounded-lg bg-primary-600 px-4 py-2.5 font-semibold text-white hover:bg-primary-700">
                Request a Quote
            </RouterLink>
            <RouterLink
                to="/contact"
                class="text-center rounded-lg border border-primary-200 bg-primary-50 px-4 py-2.5 font-semibold text-primary-700 hover:bg-primary-100">
                Contact Us
            </RouterLink>
        </div>
        <div class="mt-6">
            <h4 class="text-sm uppercase tracking-wide text-slate-500">
                Office Hours
            </h4>
            <ul class="mt-3 divide-y divide-slate-200 rounded-lg border border-slate-200 overflow-hidden text-sm">
                <li v-for="(val, key) in OFFICE_HOURS" :key="key" class="flex items-center justify-between px-4 py-2">
                    <span class="text-slate-600 capitalize">{{ val.label }}</span>
                    <span class="font-medium text-slate-800">{{ val.value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {CONTACT, OFFICE_HOURS} from "@/const/locations.js";
</script>

<style scoped>

</style>