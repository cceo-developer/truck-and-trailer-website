<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 class="text-2xl font-semibold text-slate-800">
            General
        </h2>
        <div class="mt-6 divide-y divide-slate-200">
            <details
                v-for="(item, idx) in generalFaqs" :key="idx"
                class="group py-4">
                <summary class="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <h3 class="font-medium text-slate-800">
                        {{item.q}}
                    </h3>
                    <span
                        class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition group-open:rotate-45"
                        aria-hidden="true">
                        <i class="fa-solid fa-plus text-xs" />
                    </span>
                </summary>
                <div class="mt-3 pl-0 md:pl-1 text-slate-600">
                    <p v-for="(p, i) in item.a" :key="i" class="mt-3 first:mt-0">
                        {{ p }}
                    </p>
                    <ul v-if="item.bullets" class="mt-3 list-disc pl-5 space-y-1">
                        <li v-for="(b, bi) in item.bullets" :key="bi">
                            {{ b }}
                        </li>
                    </ul>
                    <div v-if="item.note" class="mt-4 rounded-lg border border-primary-200 bg-primary-50 p-3 text-sm text-primary-800">
                        {{ item.note }}
                    </div>
                </div>
            </details>
        </div>
        <h2 class="mt-10 text-2xl font-semibold text-slate-800">
            Policies & Access
        </h2>
        <div class="mt-6 divide-y divide-slate-200">
            <details v-for="(item, idx) in policyFaqs" :key="'p-'+idx" class="group py-4">
                <summary class="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <h3 class="font-medium text-slate-800">
                        {{ item.q }}
                    </h3>
                    <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-b-slate-300 text-slate-500 transition group-open:rotate-45">
                        <i class="fa-solid fa-plus text-xs" />
                    </span>
                </summary>
                <div class="mt-3 text-slate-600">
                    <p v-for="(p, i) in item.a" :key="i" class="mt-3 first:mt-0">
                        {{ p }}
                    </p>
                    <ul v-if="item.bullets" class="mt-3 list-disc pl-5 space-y-1">
                        <li v-for="(b, bi) in item.bullets" :key="bi">
                            {{ b }}
                        </li>
                    </ul>
                </div>
            </details>
        </div>
    </div>
</template>

<script setup>
import { GENERAL_FAQS as generalFaqs, POLICY_FAQS as policyFaqs} from "@/const/faqs.js";

</script>

<style scoped>

</style>