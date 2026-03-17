<template>
    <label :for="props.for" :class="props.class">
        <div class="flex items-center gap-x-1">
            <svg v-if="showRequired" class="w-4 h-4 text-red-600 drop-shadow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            {{ props.label }}
        </div>
    </label>
</template>

<script setup>
// IMPORTS
import {computed} from 'vue';

const props = defineProps({
    label: {type: String, required: true},
    for: {type: String, required: true},
    class: {type: String, default: () => 'block font-bold mb-1'},
    required: {type: Boolean, default: () => false},
    readonly: {type: Boolean, default: () => false}
});

const showRequired = computed(() => {
    return ! props.readonly && props.required;
});
</script>