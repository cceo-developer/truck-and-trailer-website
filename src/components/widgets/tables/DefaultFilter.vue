<template>
    <div>
        <InputText
            v-if="props.column.filter.matchMode == 'contains'" 
            v-model="filterValue" :name="props.column.field" class="p-column-filter w-full" 
            @update:model-value="handleFilterChange()" />
        <DatePicker
            v-else-if="props.column.filter.matchMode == 'dateIs'"
            v-model="filterValue" :name="props.column.field" class="p-column-filter w-full"
            dateFormat="dd/mm/yy" selectionMode="range" :manualInput="true"
            @update:model-value="handleFilterChange()" />
        <Dropdown
            v-else-if="props.column.filter.matchMode == 'equals'" 
            v-model="filterValue" :filter="true" class="p-column-filter w-full" 
            optionLabel="label" optionValue="value" :showClear="true" :options="props.options" 
            @update:model-value="handleFilterChange()" />
		
        <!-- WHEN A COLUMN DOES NOT FILTER, KEEP THE STYLE -->
        <InputText 
            v-else-if="props.column.filter.matchMode == 'notContains'" 
            modelValue="" name="actions" class="w-full" disabled />
    </div>
</template>

<script setup>
// IMPORTS
import { debounce } from "lodash";

const emit = defineEmits(['change']);

const props = defineProps({
    column: {type: Object, required: true}, 
    options: {type: Array, default: () => []}
});

const filterValue = defineModel({type: [String, Number, Array, null]});

const handleFilterChange = debounce(() => emit('change'), 1000);
</script>