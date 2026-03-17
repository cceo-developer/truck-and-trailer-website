<template>
    <DatePicker
        :id="props.name"
        :modelValue="formattedDate"
        :inputId="props.name" :name="props.name"
        dateFormat="yy" class="w-full" fluid
        :minDate="props.minDate" :maxDate="props.maxDate"
        :disabled="props.disabled" view="year"
        @update:model-value="$value => handleDateChange($value)" />
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
    name: {type: String, default: () => 'date'},
    withTime: {type: Boolean, default: () => false},
    minDate: {type: Date, default: () => null},
    maxDate: {type: Date, default: () => null},
    disabled: {type: Boolean, default: () => false},
});

const item = defineModel({ type: [Number, String, null], required: true});

const formattedDate = computed(() => {
    return item.value ? new Date(`${item.value}-01-01 00:00:00`) : null
});

const handleDateChange = (value) => {
    if (!value) {
        item.value = null;
        return;
    }
    item.value = value.getFullYear();
};
</script>
