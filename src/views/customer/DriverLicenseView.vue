<template>
    <div class="bg-slate-900 text-slate-100">
        <div class="max-w-7xl mx-auto px-4 py-16 gap-8 items-center">
            <div class="bg-slate-900 h-full">
                <span class="text-sm tracking-widest uppercase text-primary-300">Driver Licenses</span>
                <h1 class="mt-2 text-3xl md:text-4xl font-bold">
                    My registered driver licenses
                </h1>
                <p class="mt-4 text-slate-300">
                    Review the driver licenses currently added to your account and manage the information.
                </p>
            </div>
        </div>
    </div>
    <div class="py-8 md:py-16">
        <div class="max-w-7xl mx-auto px-8 md:px-4 gap-10">
            <DriverLicensePanel />
        </div>
    </div>
</template>

<script setup>
import DriverLicensePanel from '@/components/customer/driver-licenses/DriverLicensePanel.vue';
</script>
