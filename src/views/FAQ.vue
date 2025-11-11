<template>
    <div class="min-h-screen bg-slate-50">
        <FAQHero />
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <FAQList />
                </div>
                <aside class="lg:col-span-1">
                    <FAQContactCTA />
                </aside>
            </div>
        </section>
    </div>
</template>

<script setup>
import FAQHero from "@/components/faq/FAQHero.vue";
import FAQList from "@/components/faq/FAQList.vue";
import FAQContactCTA from "@/components/faq/FAQContactCTA.vue";
</script>

<style scoped>

</style>