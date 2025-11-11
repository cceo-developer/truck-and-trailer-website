<template>
    <ServiceLayout
        title="Office & Warehouse Rentals"
        subtitle="From small offices to warehouse bays with high doors — operate where your fleet lives.">
        <section>
            <h2 class="text-xl md:text-2xl font-bold text-slate-900">Spaces available (site-dependent)</h2>
            <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard title="Private Offices">
                    <template #icon>🏢</template>
                    Suites with reception area, meeting rooms, and bathrooms. Central air conditioning..
                </FeatureCard>
                <FeatureCard title="Warehouse / Shop Bays">
                    <template #icon>🏗️</template>
                    High doors (e.g., 14x14), 110/220V sockets, high ceilings, light fixtures.
                </FeatureCard>
                <FeatureCard title="Break & Training Rooms">
                    <template #icon>🧑‍🏫</template>
                    Large areas for inductions and team meetings.
                </FeatureCard>
                <FeatureCard title="Kitchenettes">
                    <template #icon>🍽️</template>
                    With refrigerator and dining area (depending on suite).
                </FeatureCard>
                <FeatureCard title="Exterior Storage">
                    <template #icon>🏞️</template>
                    Assigned outdoor sections next to the building.
                </FeatureCard>
                <FeatureCard title="Easy Parking">
                    <template #icon>🚛</template>
                    Parking in front of offices and access to yard.
                </FeatureCard>
            </div>

            <p class="mt-6 text-slate-600 max-w-3xl">
                Looking for something specific in Zarzamora (BLDG-3/4/5) or other terminals? Share the square footage, type of activity, and number of people
                and we'll show you available options.
            </p>

            <div class="mt-6">
                <RouterLink to="/quote" class="rounded-xl bg-primary-600 px-5 py-2.5 text-white font-semibold hover:bg-primary-700">
                    Ask for available spaces
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