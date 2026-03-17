<template>
	<button
		type="button"
		class="bg-red-500 text-white items-center text-sm px-3 py-2 rounded-lg border border-red-500 font-bold hover:bg-red-600 hover:border-red-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-400 disabled:opacity-50 disabled:hover:bg-red-500 disabled:hover:border-red-500"
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
			<slot />
		</div>
	</button>
</template>

<script setup>

const emit = defineEmits(['click']);

const props = defineProps({
    loading: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false}
});

</script>