<template>
    <div class="border border-zinc-400 rounded-xl h-full flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
        <div class="overflow-hidden h-20">
            <img :src="image" alt="Trailer" class="w-full h-full object-cover object-[100%_80%] rounded-t-xl opacity-70" />
        </div>
        <div class="p-5 space-y-4 flex flex-col flex-1 justify-between">
            <div class="space-y-1">
                <div class="font-bold uppercase tracking-wide text-lg">
                    {{ props.vehicle.name }}
                </div>
                <div class="text-zinc-600 tracking-wide uppercase text-sm">
                    {{ props.vehicle.brand_name }} | {{ props.vehicle.year }}
                </div>
            </div>
            <div>
                <div class="flex items-center gap-x-2">
                    <i class="text-zinc-600 fa-solid fa-diamond" style="font-size: 0.8rem;" />
                    <div>License plate: {{ props.vehicle.license_plate }}</div>
                </div>
                <div class="flex items-center gap-x-2">
                    <i class="text-zinc-600 fa-solid fa-diamond" style="font-size: 0.8rem;" />
                    <div class="first-letter:capitalize lowercase">Vehicle type: {{ props.vehicle.vehicle_type_name }}</div>
                </div>
            </div>
            <div v-if="!props.vehicle.insurance_policy_id">
                <div class="bg-red-100 max-w-max px-3 rounded-lg py-1">
                    <div class="flex items-center gap-x-2 text-red-500 font-semibold text-xs">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <div>NO LOADED POLICY</div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <button type="button" class="border border-primary-400 p-3 rounded-lg text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">
                    <div class="flex items-center gap-x-2">
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
import image from "@/assets/images/trailer.jpg";

const props = defineProps({
    vehicle: {type: Object, required: true}
});

</script>