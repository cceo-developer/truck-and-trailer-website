<template>
    <Dropdown
        :id="props.id" 
        v-model="item" 
        :name="props.name" 
        optionValue="id" 
        optionLabel=""

        filter autoFilterFocus resetFilterOnHide class="w-full" 
        filterPlaceholder="Search more options"
        :filterFields="props.columns"

        :loading="loading"
        :options="dropdownOptions" 

        :disabled="props.disabled"
        :placeholder="props.disabled ? null : props.placeholder" 
        :showClear="props.disabled ? false : props.showClear"
        
        @filter="$value => loadOptionsDebounced($value)"
        @hide="handleHide">
        <template #header>
            <div class="font-medium p-3">{{ props.dropdownHeader }}</div>
        </template>

        <template #option="slotProps">
            <slot name="option" :option="slotProps.option" />
        </template>

        <template #footer>
            <div class="px-2">
                <div v-if="showLoad" class="p-1">
                    <button 
                        type="button" class="bg-white w-full p-2 text-sm rounded-lg text-zinc-600 cursor-pointer hover:bg-zinc-100 hover:text-zinc-800 focus:outline outline-offset-2 outline-zinc-300"
                        @click="getDropdownOptions(dropdownFilter, true)">
                        <div class="flex items-center justify-center gap-x-2">
                            <i class="pi pi-sync" />
                            Load more
                        </div>
                    </button>
                </div>
                <div v-else class="text-center text-sm text-zinc-400 p-2">
                    You've reached the end of the list.
                </div>
                <div v-if="props.showAddNew" class="p-1">
                    <button 
                        type="button" class="w-full p-2 text-sm rounded-lg text-zinc-600 cursor-pointer hover:bg-zinc-100 hover:text-zinc-800 focus:outline outline-offset-2 outline-zinc-300"
                        @click="emit('add-new')">
                        <div class="flex items-center justify-center gap-x-2">
                            <i class="pi pi-plus" />
                            Add new
                        </div>
                    </button>
                </div>
                <div class="pb-3" />
            </div>
        </template>
    </Dropdown>
</template>

<script setup>
//IMPORTS 
import {computed, nextTick, ref, watch} from 'vue';
import {debounce} from 'lodash';

const emit = defineEmits(['add-new']);

// THIS DROPDOWN WORKS TO ONLY CHOOSE ID
const item = defineModel({type: [Number, null], required: true});

const props = defineProps({
    // DROPDOWN
    id: {type: String, default: () => 'id'},
    name: {type: String, default: () => 'option'},

    // FOR SERVICE
    service: {type: Function, required: true},
    columns: {type: Array, default: () => ['id', 'name']},
    filters: {type: Object, default: () => {}},
    orderBy: {type: String, default: () => 'id'},
    sortOrder: {type: [String, Number], default: () => '1'},
    mainFilter: {type: String, default: () => 'search'},
    permission: {type: [String, null], default: () => null},
    
    // FOR CUSTOM
    disabled: {type: Boolean, default: () => false},
    placeholder: {type: String, default: () => null},
    showClear: {type: Boolean, default: () => true},
    showAddNew: {type: Boolean, default: () => false},
    dropdownHeader: {type: String, default: () => 'Available options'},
});

const dropdownOptions = ref([]);
const showLoad = ref(true);
const pageIndex = ref(0);
const PAGE_ROWS = 30;
const dropdownFilter = ref(null);

const loading = ref(true);

const loadOptionsDebounced = debounce((filter) => {
    if(filter.value == '' || filter.value == null) {
        dropdownFilter.value = null;
        return;
    }
    dropdownFilter.value = filter.value;
    
    getDropdownOptions(filter.value);
}, 900);

const getDropdownOptions = (filter = null, load_more = false) => {
    if(load_more) {
        pageIndex.value++;
    } else {
        showLoad.value = true;
        pageIndex.value = 0;
    }
    loading.value = true;
    props.service({
        filters: {
            ...props.filters,
            [props.mainFilter]: {value: filter, matchMode: 'equals'},

            // NEED LOGIC IN BACK-END
            order_by_selected: {value: item.value, matchMode: 'equals'}
        },
        columns: props.columns,
        sortField: props.orderBy, sortOrder: props.sortOrder, 
        first: (pageIndex.value * PAGE_ROWS), rows: PAGE_ROWS
    }).then((response) => {
        if(response.data.length == 0) {
            showLoad.value = false;
        }
        const selected = item.value ? dropdownOptions.value.find(element => element.id == item.value) : null;
        
        dropdownOptions.value = load_more ? [...dropdownOptions.value, ...response.data] : response.data;
        
        nextTick(() => addSelectedElement(selected));
    }).finally(() => {
        loading.value = false;
    })
}

const handleHide = () => {
    dropdownFilter.value = null;
    showLoad.value = true;
    pageIndex.value = 0;
    getDropdownOptions();
}

const addSelectedElement = (selected) => {
    if(selected) {
        if(! dropdownOptions.value.some(element => element.id == selected.id)) {
            dropdownOptions.value.unshift(selected);
        }
    }
}

const selectedElement = computed(() => {
    return item.value ? dropdownOptions.value.find(element => element.id == item.value) : null;
});

const newAdded = (response) => {
    item.value = response.data.id; 
    nextTick(() => getDropdownOptions());
}

watch(() => props.filters, () => {
    getDropdownOptions();
}, { deep: true, immediate: true});

defineExpose({getDropdownOptions, newAdded, selectedElement});
</script>