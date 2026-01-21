<template>	
    <div class="flex">
        <Select
            id="lada" :modelValue="areaCodeValue" name="lada"
            :options="phoneAreaCodes" optionLabel="phoneCode" optionValue="phoneCode" 
            filter autoFilterFocus resetFilterOnHide filterPlaceholder="Search area code"
            placeholder="+" :filterFields="['nameEN', 'phoneCode']" :disabled="props.disabled"
            :style="{'border-right': 'none', 'border-radius': '0.4rem 0rem 0rem 0.4rem'}"
            @update:model-value="$value => handleValueChange($value, 'area-code')">
            <template #value="slotProps">
                <div v-if="areaCodeValue" class="flex items-center gap-x-2 min-w-max">
                    <img 
                        v-if="selectedAreaCode" :alt="selectedAreaCode.iso2" 
                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" 
                        :class="`flag flag-${selectedAreaCode.iso2.toLowerCase()}`" style="width: 20px" />
                    <div>{{ slotProps.value }}</div> 
                </div>
                <div v-else>+</div> 
            </template>
            <template #option="slotProps">
                <div class="flex gap-x-3">
                    <div class="flex items-center gap-x-2">
                        <img 
                            :alt="slotProps.option.iso2" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" 
                            :class="`flag flag-${slotProps.option.iso2.toLowerCase()}`" style="width: 20px" />
                        <div class="font-semibold w-[3rem]">{{ slotProps.option.phoneCode }}</div>
                    </div> 
                    <div>|</div><div class="text-zinc-600">{{ slotProps.option.nameEN }}</div>
                </div>
            </template>
        </Select>
        <InputMask
            :id="props.name" :modelValue="phoneNumberValue" :autoClear="false"
            mask="(999) 999 - 9999" :name="props.name" :disabled="props.disabled" 
            class="w-full" :style="{'border-left': 'none', 'border-radius': '0rem 0.4rem 0.4rem 0rem'}"
            @update:model-value="$value => handleValueChange($value, 'phone')" />
    </div>
</template>

<script setup>
// IMPORTS
import {watch, computed} from 'vue';
// CONSTANTS
import phoneAreaCodes from '@/const/phone-area-codes.js';

const item = defineModel({type: [String, null], default: () => null });

const props = defineProps({
    name: {type: String, required: true},
    disabled: {type: Boolean, default: () => false},
});

const areaCodeValue = computed(() => {
    if(item.value) {
        const position = item.value.indexOf('(');
        if(position !== -1) {
            return item.value.slice(0, position).trim();
        }
        return item.value.trim();
    }
    return null;
});

const phoneNumberValue = computed(() => {
    if(item.value) {
        const position = item.value.indexOf('(');
        if(position !== -1) {
            return item.value.slice(position).trim();
        }
        return null;
    }
    return null;
});

const selectedAreaCode = computed(() => {
    return areaCodeValue.value ? phoneAreaCodes.find(areaCode => areaCode.phoneCode == areaCodeValue.value) : null;
})

const handleValueChange = (value, property) => {
    if(property == 'area-code') {
        item.value = `${value ?? ''} ${phoneNumberValue.value ?? ''}`.trim();     
    } else if (property == 'phone') {
        item.value = `${areaCodeValue.value ?? ''} ${value ?? ''}`.trim();
    }
}

watch(() => item.value, (value) => {
    if(!value && !props.disabled) {
        item.value = "+1";
    }
}, { immediate: true });

</script>