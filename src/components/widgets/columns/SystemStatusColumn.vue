<template>
    <div class="px-2">
        <div class="text-center rounded-lg py-1 font-bold px-6" :style="{'color':`${currentStatus.color}`, 'background':`${currentStatus.background}`}">
            <div class="flex items-center gap-x-4">
                <i :class="`${currentStatus.icon}`" style="font-size: 1.2rem;" /> 
                <div>{{ currentStatus.show ?? currentStatus.label }}</div>
            </div>
        </div>
    </div> 
</template>

<script setup>
// IMPORTS
import {computed} from 'vue';
import {NO_INFORMATION_OBJECT} from '@/constants/system_statuses.js';

const props = defineProps({
    status: {type: String, required: true},
    options: {type: Array, required: true},
});

const currentStatus = computed(() => {
    const index = props.options.findIndex(_status => _status.label === props.status);

    if(index === -1) {
        return NO_INFORMATION_OBJECT;
    }

    return props.options[index];
});

</script>