<template>
    <div class="min-h-dvh flex flex-col bg-white text-slate-800">
        <header>
            <NavBar />
        </header>
        <main class="flex-1">
            <slot />
        </main>
        <footer class="border-t">
            <FooterBar />
        </footer>
    </div>
</template>

<script setup>

import NavBar from "@/layout/components/nav/NavBar.vue";
import FooterBar from "@/layout/components/FooterBar.vue";
</script>

<style scoped>

</style>