<template>
	<div :class="props.column.bodyClass && !dataIsNull ? props.column.bodyClass(data) : ''">
		<div :class="{'text-zinc-300' : dataIsNull}">
			<template v-if="props.column.bodyTemplate">
				{{ props.column.bodyTemplate(data) ?? 'No information' }}	
			</template>
			<template v-else>
				{{ props.data[props.column.field] ?? 'No information' }}
			</template>
		</div>
	</div>
</template>

<script setup>
// IMPORTS
import {computed} from 'vue';

const props = defineProps({
    column: {type: Object, required: true},
    data: {type: Object, required: true}
});

const dataIsNull = computed(() => {
    return props.data[props.column.field] == null && 
		(props.column.bodyTemplate ? props.column.bodyTemplate(props.data) : null) == null;
})
</script>