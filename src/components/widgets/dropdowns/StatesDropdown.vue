<template>
    <div>
        <DropdownBase
            id="state_id"
            ref="dropdown"
            v-model="item"
            name="state_id"
            :optionLabel="record => getLabel(record)"
            :service="getStates"
            :columns="props.columns"
            :filters="props.filters"
            mainFilter="search"
            :disabled="props.disabled"
            :showClear="props.showClear"
            :showAddNew="false"
            @add-new="modal.showStore()">
            <template #option="slotProps">
                <slot v-if="$slots.option" name="option" :option="slotProps.option" />
                <div v-else>
                    <div>
                        {{ slotProps.option.name }} 
                        <span class="text-zinc-400">({{ slotProps.option.abbreviation }})</span>
                    </div>
                </div>
            </template>
        </DropdownBase>
    </div>
</template>

<script setup>
// IMPORTS
import {ref} from 'vue';
import DropdownBase from '@/components/widgets/dropdowns/DropdownBase.vue';
// SERVICE
import {getStates} from '@/services/customer/state-services.js';

const props = defineProps({
    columns: {type: Array, default: () => ['id', 'name', 'abbreviation']},
    filters: {type: Object, default: () => {}},
    disabled: {type: Boolean, default: () => false},
    showClear: {type: Boolean, default: () => true},  
});

const item = defineModel({type: [Number, String, null], required: true});

const dropdown = ref(null);
const modal = ref(null);

const getLabel = (record) => (`${record.name}`)

defineExpose({dropdown});
</script>