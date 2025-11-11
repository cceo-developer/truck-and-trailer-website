<template>
    <div class="min-h-screen bg-slate-50">
        <header class="relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-orange-400 opacity-90" />
            <div class="relative mx-auto max-w-7xl px-4 py-4">
                <nav class="text-sm/6 opacity-90">
                    <RouterLink to="/services" class="bg-slate-100 hover:bg-slate-200 px-2 py-1 text-center rounded-lg font-medium">
                        Services
                    </RouterLink>
                    <span class="mx-2" />
                    <span class="opacity-95">{{ title }}</span>
                </nav>
                <h1 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                    {{ title }}
                </h1>
                <p class="mt-3 max-w-2xl text-white/95">
                    {{ subtitle }}
                </p>
                <div class="mt-6 flex flex-wrap gap-3">
                    <RouterLink
                        to="/quote"
                        class="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 font-semibold text-primary-700 shadow-sm hover:shadow transition">
                        Get a Quote
                    </RouterLink>
                    <RouterLink
                        to="/locations"
                        class="inline-flex items-center gap-2 rounded-2xl bg-white/10 ring-1 ring-white/30 px-5 py-2.5 font-semibold hover:bg-white/15">
                        See Locations
                    </RouterLink>
                </div>
            </div>
        </header>

        <main class="mx-auto max-w-7xl px-4 py-12">
            <slot />
        </main>

        <!-- CTA sticky -->
        <footer class="border-t bg-white/80 backdrop-blur">
            <div class="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-slate-700">
                    Ready to start? TTS gives you secure, flexible solutions 24/7.
                </p>
                <div class="flex gap-3">
                    <RouterLink to="/quote" class="rounded-xl bg-primary-600 px-5 py-2.5 text-white font-semibold hover:bg-primary-700">
                        Request a Quote
                    </RouterLink>
                    <RouterLink to="/contact" class="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold hover:bg-slate-50">
                        Contact Sales
                    </RouterLink>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

defineProps({
    title: { type: String, required: true},
    subtitle: { type: String, default: ''}
})

</script>

<style scoped>

</style>