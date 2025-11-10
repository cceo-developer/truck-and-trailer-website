<template>
    <div class="rounded-2xl overflow-hidden border border-slate-200">
        <div class="p-6 border-b border-slate-200 bg-slate-50">
            <h3 class="text-xl font-semibold text-slate-800">Find us on the map</h3>
            <p class="text-slate-600 mt-1">Secure access across four terminals in San Antonio.</p>
        </div>

        <!-- Mapa embebido (solo UI). Puedes reemplazar el src por CONTACT.mapEmbed -->
        <div class="aspect-[16/9]">
            <iframe
                class="w-full h-full"
                style="border:0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="embedUrl"
                title="TTS Location Map"
            ></iframe>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { CONTACT } from '@/const/locations.js'

// Si tienes un CONTACT.mapEmbed, úsalo; si no, cae a una query por dirección:
const embedUrl = computed(() => {
    if (CONTACT.mapEmbed) return CONTACT.mapEmbed
    const q = encodeURIComponent(CONTACT.address || 'San Antonio, TX')
    return `https://www.google.com/maps?q=${q}&output=embed`
})
</script>

<style scoped>

</style>