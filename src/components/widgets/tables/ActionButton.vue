<template>
    <div class="flex items-center justify-center">
        <button
            v-if="!props.loading"
            v-tooltip.top="{value: props.tooltip, pt: {text: {class: 'bg-primary-600 font-semibold text-sm min-w-max'}}}"
            type="button"
            class="not-disabled:cursor-pointer hover:text-zinc-950 disabled:opacity-30 disabled:hover:text-zinc-600 active:text-zinc-950"
            :class="props.extraClass"
            :disabled="props.disabled || props.loading"
            @click="emit('click')">
            <!-- ICON -->
            <div 
                class="flex items-center justify-center hover:text-primary-600" :class="{
                    'transition ease-in-out delay-0 hover:-translate-y-1.5 hover:scale-110 duration-75' : !props.disabled
                }">
                <div v-if="props.icon">
                    <i :class="`pi ${props.icon} mt-1.5`" style="font-size: 1.2rem;" />
                </div>
                <div v-else-if="$slots.icon">
                    <slot name="icon" />
                </div>
                <div v-else class="text-2xl uppercase">
                    {{ props.tooltip[0] }}
                </div>
            </div>
        </button>
        <svg
            v-else
            class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
            <path class="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    </div>
</template>

<script setup>
const emit = defineEmits(['click']);

const props = defineProps({
    tooltip: {type: [String, null], required: true},
    icon: {type: String, default: () => null},
    disabled: {type: Boolean, default: () => false},
    loading: {type: Boolean, default: () => false},
    extraClass: {type: String, default: () => ''}
});
</script>