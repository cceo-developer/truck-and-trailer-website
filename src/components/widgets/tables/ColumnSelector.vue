<template>
    <MultiSelect 
        v-model="selectedColumns" :options="props.columnOptions" optionLabel="header" optionValue="field" 
        filter autoFilterFocus resetFilterOnHide :maxSelectedLabels="0"
        :selectedItemsLabel="`showing {0} of ${props.columnOptions.length} columns`" placeholder="No column selected." 
        @update:model-value="handleColumnsChange" />
</template>

<script setup>
// IMPORTS
import { onMounted } from 'vue';
import { debounce } from "lodash";

const selectedColumns = defineModel({type: Array, default: () => []});

const props = defineProps({
    columnOptions: {type: Array, default: () => []},
    stateKey: {type: String, default: () => null}
});

const handleColumnsChange = debounce(() => saveColumnsInLocalStorage(), 1000);

const saveColumnsInLocalStorage = () => {
    if (!props.stateKey) {
        return;
    }
    localStorage.setItem(`${props.stateKey}_columns`, JSON.stringify(selectedColumns.value));
}

const defaultSelectedColumns = () => {
    if (!props.stateKey) {
        return props.columnOptions.map(column => column.field);
    }
    let saved_selected_columns = JSON.parse(localStorage.getItem(`${props.stateKey}_columns`));

    let updated = saved_selected_columns && saved_selected_columns.every(selected => props.columnOptions.some((column) => column.field == selected))
    if(updated && saved_selected_columns.length > 0) {
        return saved_selected_columns;
    }

    return props.columnOptions.map(column => column.field);
}

onMounted(() => {
    selectedColumns.value = defaultSelectedColumns();
});


</script>