<template>
    <div class="bg-slate-900 text-slate-100">
        <div class="max-w-7xl mx-auto px-4 py-12 gap-8 items-center flex justify-between items-end">
            <div class="bg-slate-900 h-full">
                <span class="text-sm tracking-widest uppercase text-primary-300">Vehicles</span>
                <h1 class="mt-2 text-3xl md:text-4xl font-bold">
                    My registered vehicles
                </h1>
                <p class="mt-4 text-slate-300">
                    Review and manage the vehicles currently saved to your account.
                </p>
            </div>
            <PrimaryButton @click="() => panel.openModal()">
                Add new vehicle
                <i class="fa-solid fa-arrow-right-long"></i>
            </PrimaryButton>   
        </div>
    </div>
    <div class="pt-2 pb-12">
        <div class="max-w-7xl mx-auto px-8 md:px-4 gap-10">
            <VehiclesPanel ref="panel" />
        </div>
    </div>
    
</template>

<script setup>
// IMPORTS
import {ref} from 'vue';
import VehiclesPanel from '@/components/customer/vehicles/VehiclesPanel.vue';

const panel = ref(null);
</script>