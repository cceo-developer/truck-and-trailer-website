<template>
    <ServiceLayout
        title="Vehicle Maintenance (Light)"
        subtitle="On-site light services via trusted partners to keep your units moving.">
        <section>
            <h2 class="text-xl md:text-2xl font-bold text-slate-900">Popular services</h2>
            <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard title="Basic PM Checks"><template #icon>🧰</template>Fluidos, luces, baterías, presión de llantas.</FeatureCard>
                <FeatureCard title="Jumpstarts & Tires"><template #icon>🔋</template>Arranques de emergencia y soporte básico de llantas.</FeatureCard>
                <FeatureCard title="DOT Prep (light)"><template #icon>📋</template>Apoyo visual y checklist previo a inspección.</FeatureCard>
                <FeatureCard title="Yard Moves"><template #icon>🚜</template>Reposicionamientos internos coordinados.</FeatureCard>
                <FeatureCard title="Scheduling Help"><template #icon>🗓️</template>Coordinación con tu dispatcher para ventanas de servicio.</FeatureCard>
                <FeatureCard title="Partner Network"><template #icon>🤝</template>Referencias para trabajos especializados fuera del sitio.</FeatureCard>
            </div>
        </section>

        <section class="mt-12 rounded-2xl bg-white p-6 border border-slate-200">
            <h3 class="text-lg font-semibold">Scope & Availability</h3>
            <p class="mt-1 text-slate-600">
                El alcance varía por terminal y agenda de partners. Cuéntanos unidades, horas preferidas y tipo de servicio
                para confirmar disponibilidad y tiempos.
            </p>
            <div class="mt-4">
                <RouterLink to="/quote" class="rounded-xl bg-primary-600 px-5 py-2.5 text-white font-semibold hover:bg-primary-700">
                    Schedule maintenance
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