<template>
    <div class="border border-zinc-400 rounded-xl h-full flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] bg-white">
        <div class="p-6 space-y-5 flex flex-col flex-1 justify-between">
            <div class="space-y-2">
                <div class="flex justify-between items-start gap-4">
                    <div class="font-bold uppercase tracking-wide text-lg text-zinc-900 leading-tight">
                        {{ props.driverLicense.driver_name }}
                    </div>
                    <div class="shrink-0 flex items-center justify-end">
                        <div v-if="tagStatus === 'expired'" class="bg-red-100 max-w-max px-3 rounded-lg py-1">
                            <div class="flex items-center gap-x-2 text-red-600 font-bold text-xs uppercase tracking-wider">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                <span>Expired</span>
                            </div>
                        </div>
                        <div v-else-if="tagStatus === 'warning'" class="bg-amber-100 max-w-max px-3 rounded-lg py-1">
                            <div class="flex items-center gap-x-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                                <i class="fa-solid fa-triangle-exclamation"></i>
                                <span>Expiring soon</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center gap-x-2 border-b border-zinc-300 pb-2">
                    <i class="text-zinc-500 fa-solid fa-id-card text-sm" />
                    <div class="text-zinc-600 tracking-wide text-sm font-medium">
                        License: <span class="uppercase font-bold text-zinc-800 ml-1">{{ props.driverLicense.license_number }}</span>
                    </div>
                </div>
            </div>
            
            <div class="space-y-2 flex-grow">
                <div class="flex items-center gap-x-3 text-sm">
                    <i class="text-zinc-400 fa-solid fa-cake-candles w-4 text-center" />
                    <span class="text-zinc-500 w-20">Birthdate:</span>
                    <span class="font-medium text-zinc-800">{{ props.driverLicense.driver_birthdate }}</span>
                </div>
                <div class="flex items-center gap-x-3 text-sm">
                    <i class="text-zinc-400 fa-solid fa-calendar-xmark w-4 text-center" />
                    <span class="text-zinc-500 w-20">Expiration:</span>
                    <span class="font-semibold" :class="{'text-red-600': tagStatus === 'expired', 'text-amber-600': tagStatus === 'warning', 'text-zinc-800': tagStatus === 'none'}">
                        {{ props.driverLicense.expiration_date }}
                    </span>
                </div>
                <div class="flex items-center gap-x-3 text-sm">
                    <i class="text-zinc-400 fa-solid fa-map-location-dot w-4 text-center" />
                    <span class="text-zinc-500 w-20">Location:</span>
                    <span class="font-medium text-zinc-800">{{ props.driverLicense.state_name }}, {{ props.driverLicense.country_name }}</span>
                </div>
                <div class="flex items-start gap-x-3 text-sm pt-1">
                    <i class="text-zinc-400 fa-solid fa-location-dot w-4 text-center mt-1" />
                    <span class="text-zinc-500 w-20 shrink-0">Address:</span>
                    <span class="font-medium text-zinc-800 leading-snug line-clamp-2">{{ props.driverLicense.address }}</span>
                </div>
            </div>

            <div class="flex justify-end mt-auto">
                <button @click="$emit('view-details', props.driverLicense.id)" type="button" class="border border-primary-400 p-2.5 px-5 rounded-lg text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold text-sm transition-all duration-200 w-full md:w-auto">
                    <div class="flex items-center justify-center gap-x-2">
                        <div>View details</div>
                        <div>
                            <i class="fa-solid fa-arrow-right-long" />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    driverLicense: {type: Object, required: true}
});

defineEmits(['view-details']);

const tagStatus = computed(() => {
    if (!props.driverLicense.expiration_date) return 'none';
    
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    
    const expDate = new Date(props.driverLicense.expiration_date);
    
    if (isNaN(expDate.getTime())) return 'none';
    
    if (expDate < todayDate) {
        return 'expired';
    }
    
    const thirtyDaysFromNow = new Date(todayDate);
    thirtyDaysFromNow.setDate(todayDate.getDate() + 30);
    
    if (expDate <= thirtyDaysFromNow) {
        return 'warning';
    }
    
    return 'none';
});

</script>
