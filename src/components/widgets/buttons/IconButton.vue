<template>
	<button
		v-tooltip.top="{value: props.tooltip, pt: {text: {class: 'bg-primary-600 font-semibold text-sm'}}}"
		type="button"
		class="bg-white text-primary-500 w-[2.5rem] aspect-square rounded-full border border-primary-500 hover:bg-primary-100 hover:border-primary-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-400 disabled:opacity-50 disabled:hover:bg-white disabled:hover:border-primary-500"
		:class="{'cursor-pointer': !props.loading && !props.disabled, 'cursor-progress': props.loading, 'cursor-not-allowed': props.disabled}"
		:disabled="props.loading || props.disabled"
		@click="emit('click')">
		<div class="flex items-center justify-center gap-x-2">
			<svg
				v-if="props.loading"
				class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path class="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
			</svg>
			<div v-else>
				<i :class="`pi ${props.icon} pt-1`" style="font-size: 1.1rem" />
			</div> 
		</div>
	</button>
</template>

<script setup>

const emit = defineEmits(['click']);

const props = defineProps({
    loading: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    icon: {type: String, default: 'pi-info'},
    tooltip: {type: String, default: () => null},
});

</script>