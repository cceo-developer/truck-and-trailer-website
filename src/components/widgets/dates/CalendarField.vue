<template>
    <DatePicker
        :id="props.name"
        :modelValue="formattedDate"
        :inputId="props.name" :name="props.name"
        dateFormat="mm/dd/yy" class="w-full"
        showIcon fluid iconDisplay="input"
        :showTime="props.withTime" hourFormat="12"
        :minDate="props.minDate" :maxDate="props.maxDate"
        :disabled="props.disabled"
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

const item = defineModel({ type: [String, null], required: true});

const formattedDate = computed(() => {
    let time = props.withTime ? '' : ' 00:00:00';

    return item.value ? new Date(`${item.value}${time}`) : null
});

const handleDateChange = (value) => {
    if (!value) {
        item.value = null;
        return;
    }
    const datePart = value.toLocaleDateString('sv-SE');
    const hours = String(value.getHours()).padStart(2, '0');
    const minutes = String(value.getMinutes()).padStart(2, '0');
    const timePart = `${hours}:${minutes}:00`;

    item.value = props.withTime ? `${datePart} ${timePart}` : datePart;
};
</script>
