<template>
    <label :for="props.for">
        <div class="flex items-center gap-x-1">
            <svg v-if="props.required && !props.readonly" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <div v-if="$slots.label">
                <slot name="label" />
            </div>
            <div v-else class="font-semibold">
                {{ props.label }}
            </div>
        </div>
    </label>
</template>

<script setup>

const props = defineProps({
    for: {type: String, required: true},
    label: {type: String, default: () => null},
    required: {type: Boolean, default: () => false},
    readonly: {type: Boolean, default: () => false},
});

</script>

