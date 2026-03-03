<template>
    <div class="min-h-screen bg-slate-50">
        <QuoteHero />

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Principal: Formulario -->
                <div class="lg:col-span-2">
                    <QuoteForm />
                </div>

                <!-- Lateral: Info / Ayuda -->
                <aside class="lg:col-span-1 space-y-6">
                    <QuoteInfo />
                    <QuoteHelp />
                </aside>
            </div>
        </section>
    </div>
</template>

<script setup>
import QuoteHero from "@/components/quote/QuoteHero.vue";
import QuoteForm from "@/components/quote/QuoteForm.vue";
import QuoteInfo from "@/components/quote/QuoteInfo.vue";
</script>


<style scoped>

</style>