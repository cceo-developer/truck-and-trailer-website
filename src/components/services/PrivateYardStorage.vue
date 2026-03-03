<template>
    <ServiceLayout
        title="Private Yard Storage"
        subtitle="Dedicated yard sections for carriers and contractors who want separation, control and scalability.">
        <section>
            <h2 class="text-xl md:text-2xl font-bold text-slate-900">Dedicated space. Your rules.</h2>
            <p class="mt-2 text-slate-600 max-w-3xl">
                Reserve an exclusive area within our terminals for your operation: controlled access, custom signage,
                and the option to add locks, gates, and signs.
            </p>

            <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard title="Exclusive Area"><template #icon>🚧</template>Segment enclosed or ordered by lines.</FeatureCard>
                <FeatureCard title="Custom Signage"><template #icon>🪧</template>Numbering and signage with your branding.</FeatureCard>
                <FeatureCard title="Scalable Footprint"><template #icon>📐</template>Expand or reduce by season.</FeatureCard>
                <FeatureCard title="Power & Water (site-dependent)"><template #icon>⚡</template>Options depending on terminal/building.</FeatureCard>
                <FeatureCard title="Easier Audits"><template #icon>🧾</template>Inventories by section and access controls.</FeatureCard>
                <FeatureCard title="Partner Services"><template #icon>🤝</template>Light maintenance and on-demand yard moves.</FeatureCard>
            </div>
        </section>

        <section class="mt-12">
            <h2 class="text-xl md:text-2xl font-bold">Ideal for</h2>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
                <li class="flex gap-3"><span>✅</span> Contractors with mixed equipment (trailers, vans, flatbeds).</li>
                <li class="flex gap-3"><span>✅</span> Carriers with high-value cargo or strict SOPs.</li>
                <li class="flex gap-3"><span>✅</span> Temporary operations / projects.</li>
            </ul>
        </section>

        <section class="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-lg font-semibold">Sizes & Terms</h3>
            <p class="mt-1 text-slate-600">From 5 to 40+ slots per section. Monthly or project-based terms..</p>
            <div class="mt-4">
                <RouterLink to="/quote" class="rounded-xl bg-primary-600 px-5 py-2.5 text-white font-semibold hover:bg-primary-700">
                    Request dedicated yard
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