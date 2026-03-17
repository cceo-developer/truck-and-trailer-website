<template>
	<div v-if="props.value">
		<div>{{ formatter.userDateFormatMonth(props.value) }}</div>
		<div v-if="props.withTime" class="text-zinc-500 text-sm">{{ formatter.userTimeFormat(props.value) }}</div>
	</div>
	<div v-else class="text-zinc-300">
		No information
	</div>
</template>

<script setup>
import useFormatter from '@/composables/formatter.js';

const formatter = useFormatter();

const props = defineProps({
    value: {type: [String, null], required: true},
    withTime: {type: Boolean, default: () => false}
});

</script>