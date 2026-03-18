<template>
	<button
		type="button"
		class="text-primary-500 cursor-pointer hover:font-semibold hover:border-b"
		:style="{'width': props.width }"
		@click="emit('click')">
		<div class="flex items-center justify-center gap-x-2">
			<i :class="`pi ${props.icon}`" /><div>{{ props.label }}</div>
		</div>
	</button>
</template>

<script setup>

const emit = defineEmits(['click']);

const props = defineProps({
    icon: {type: String, default: 'pi-chevron-right'},
    label: {type: String, default: 'action'},
    width: {type: String, default: '8rem'},
});

</script>