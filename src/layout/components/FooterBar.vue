<template>
    <div class="mx-auto max-w-7xl px-4 py-10">
        <div class="grid md:grid-cols-4 gap-6">
            <div class="md:col-span-2">
                <div class="flex items-center gap-3">
                    <img :src="logo" alt="Logo" class="h-8 w-auto" />
                    <span class="font-bold text-xl">TransX</span>
                </div>
                <p class="mt-3 text-sm text-slate-600">
                    Pie de página temporal. Luego lo reemplazamos con el contenido del template.
                </p>
            </div>
            <div>
                <h5 class="font-semibold">Links</h5>
                <ul class="mt-3 space-y-2 text-sm">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <h5 class="font-semibold">Contact</h5>
                <ul class="mt-3 space-y-2 text-sm">
                    <li>info@example.com</li>
                    <li>+1 234 567 890</li>
                </ul>
            </div>
        </div>
        <div class="mt-8 border-t pt-6 text-xs text-slate-500">
            © {{ new Date().getFullYear() }} TransX. All rights reserved.
        </div>
    </div>
</template>

<script setup>
import logo from '@/assets/logo_black.png'
</script>

<style scoped>

</style>