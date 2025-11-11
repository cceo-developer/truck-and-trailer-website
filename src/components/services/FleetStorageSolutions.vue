<template>
    <ServiceLayout
        title="Fleet Storage Solutions"
        subtitle="Secure, 24/7 access for trucks, trailers, and equipment across multiple terminals in San Antonio."
    >
        <!-- Value props -->
        <section>
            <h2 class="text-xl md:text-2xl font-bold text-slate-900">Why fleets choose TTS</h2>
            <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard title="24/7 Secured Access">
                    <template #icon>🛡️</template>
                    Controlled entry/exit, lighting, cameras, and on-site protocols.
                </FeatureCard>
                <FeatureCard title="Multiple Locations">
                    <template #icon>🗺️</template>
                    Randolph, Sherri Ann, Zarzamora y más para reducir deadhead.
                </FeatureCard>
                <FeatureCard title="Flexible Terms">
                    <template #icon>📆</template>
                    Short/long-term, by slot or yard section. Scale as you grow.
                </FeatureCard>
                <FeatureCard title="Wide/Deep Slots">
                    <template #icon>🅿️</template>
                    Layout para tractor-trailer, bobtails, flatbeds y reefers.
                </FeatureCard>
                <FeatureCard title="Easy Dispatcher Ops">
                    <template #icon>📲</template>
                    Señalización clara + rutas internas pensadas para maniobras rápidas.
                </FeatureCard>
                <FeatureCard title="Add-ons">
                    <template #icon>➕</template>
                    Yard moves, basic checks, jumpstart, tire/fluids via partners.
                </FeatureCard>
            </div>
        </section>

        <!-- Specs -->
        <section class="mt-12">
            <h2 class="text-xl md:text-2xl font-bold text-slate-900">What’s included</h2>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
                <li class="flex gap-3"><span>✅</span> Dedicated slots with line-painting and numbering.</li>
                <li class="flex gap-3"><span>✅</span> Wide turning radius and one-way traffic where required.</li>
                <li class="flex gap-3"><span>✅</span> Lighting, cameras and perimeter fencing.</li>
                <li class="flex gap-3"><span>✅</span> On-call support and simple monthly billing.</li>
            </ul>
        </section>

        <!-- CTA -->
        <section class="mt-12 rounded-2xl bg-primary-50 p-6 ring-1 ring-primary-100">
            <h3 class="text-lg font-semibold text-primary-800">Need 10+ spots or a mixed fleet?</h3>
            <p class="mt-1 text-primary-900/80">We’ll tailor pricing by volume and term length.</p>
            <div class="mt-4">
                <RouterLink to="/quote" class="rounded-xl bg-primary-600 px-5 py-2.5 text-white font-semibold hover:bg-primary-700">
                    Get a fleet quote
                </RouterLink>
            </div>
        </section>
    </ServiceLayout>
</template>

<script setup>

import ServiceLayout from "@/components/services/ServiceLayout.vue";
import FeatureCard from "@/components/services/FeatureCard.vue";
</script>

<style scoped>

</style>