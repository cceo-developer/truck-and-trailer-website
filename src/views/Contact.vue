<template>
    <div class="min-h-screen bg-slate-50">
        <ContactHero />
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Columna principal: Formulario -->
                <div class="lg:col-span-2">
                    <ContactForm />
                </div>

                <!-- Columna lateral: Info + Horarios -->
                <aside class="lg:col-span-1">
                    <ContactInfo />
                </aside>
            </div>
        </section>

        <section class="bg-white border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <ContactMap />
            </div>
        </section>
    </div>
</template>

<script setup>

import ContactHero from "@/components/contact/ContactHero.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactInfo from "@/components/contact/ContactInfo.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
</script>

<style scoped>

</style>