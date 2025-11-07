<template>
    <RouterLink to="/" class="flex items-center gap-3 rounded focus:outline-none focus:ring-2 focus:ring-primary-500">
        <img :src="logo" alt="TransX logo" class="h-8 w-auto" />
        <span class="font-bold text-xl tracking-tight sr-only">TransX</span>
    </RouterLink>
</template>

<script setup>
import logo from "@/assets/truck/logo_full.png"
</script>

<style scoped>

</style>