<template>
    <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <header class="max-w-3xl">
                <span class="block text-sm tracking-widest uppercase text-primary-600">Why Choose TTS</span>
                <h3 class="text-2xl md:text-3xl font-bold mt-2">Security, convenience, and support for your fleet</h3>
                <p class="mt-2 text-slate-600">
                    We provide secure, client-centric storage with flexible terms, multiple terminals across San Antonio,
                    and value-added services to keep your assets ready.
                </p>
            </header>

            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Card 1 -->
                <article class="rounded-xl border border-slate-200 bg-white p-6">
                    <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h4 class="mt-4 font-semibold">Ultimate Security</h4>
                    <p class="mt-2 text-sm text-slate-600">
                        24/7 surveillance, gated & fenced access, on-site staff, and login/logout controls for peace of mind.
                    </p>
                </article>

                <!-- Card 2 -->
                <article class="rounded-xl border border-slate-200 bg-white p-6">
                    <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                    </div>
                    <h4 class="mt-4 font-semibold">Value-Added Services</h4>
                    <p class="mt-2 text-sm text-slate-600">
                        Optional vehicle checks, cleaning, battery charging, tire pressure monitoring, and more on demand.
                    </p>
                </article>

                <!-- Card 3 -->
                <article class="rounded-xl border border-slate-200 bg-white p-6">
                    <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <h4 class="mt-4 font-semibold">Multiple Locations</h4>
                    <p class="mt-2 text-sm text-slate-600">
                        Four secure terminals across San Antonio with easy access to major routes and hubs.
                    </p>
                </article>

                <!-- Card 4 -->
                <article class="rounded-xl border border-slate-200 bg-white p-6">
                    <div class="h-11 w-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h4 class="mt-4 font-semibold">Flexible Terms & Pricing</h4>
                    <p class="mt-2 text-sm text-slate-600">
                        Short & long-term options (daily, monthly, yearly), dedicated parking—no stacking delays.
                    </p>
                </article>
            </div>

            <!-- Mini CTA -->
            <div class="mt-10 flex flex-wrap gap-3">
                <RouterLink
                    to="/why-choose-us"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium"
                >
                    Learn more
                    <i class="fa-solid fa-arrow-right-long"></i>
                </RouterLink>
                <RouterLink
                    to="/locations"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary-600 text-primary-700 hover:bg-primary-50 font-medium"
                >
                    View locations
                    <i class="fa-solid fa-map-location-dot"></i>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>