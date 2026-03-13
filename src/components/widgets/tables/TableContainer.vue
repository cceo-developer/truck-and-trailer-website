<template>
    <div class="bg-white p-2 border border-zinc-300 rounded-lg outline outline outline-offset-2 outline-zinc-200">
        <DataTable
            ref="dataTable" 
			
            v-model:filters="lazyParams.filters" 
            v-model:sort-field="lazyParams.sortField" 

            :rows="lazyParams.rows"
            :value="items" 
            :totalRecords="totalRecords" 
            :loading="loading"
            :stateKey="stateKey"
			
            dataKey="id" :lazy="true" :paginator="true" scrollable removableSort 
            :scrollHeight="props.scrollHeight" class="p-datatable-sm custom-scrollbar" 
            resizableColumns columnResizeMode="fit"  
            responsiveLayout="scroll" :filterDisplay="filterDisplay" stateStorage="session"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[20, 50, 100]"
            :currentPageReportTemplate="currentPageReportTemplate" 
			
            @page="onUpdate"
            @sort="onUpdate" 
            @filter="onUpdate">
            <template #empty>No results</template>
            <template #loading>Loading data...</template>

            <!-- COLUMNS SLOT -->
            <slot name="columns" />

            <Column 
                v-if="$slots.actions"
                field="actions" style="min-width: max-content" frozen alignFrozen="right" :showFilterMenu="false">
                <template #header>
                    <div class="w-full flex justify-center font-bold">Actions</div>	
                </template>
                <template #filter>
                    <InputText modelValue="" name="actions" class="w-full" disabled />
                </template>
                <template #body="{data}">
                    <slot name="actions" :data="data" />
                </template>
            </Column>
        </DataTable>
        <!-- <ConfirmDeleteComponent ref="deleteModal" @done="loadLazyData" /> -->
    </div>
</template>

<script setup>
// IMPORTS
import {ref, computed} from 'vue';
// COMPOSABLES
import useTables from "@/composables/tables.js";
import {useResponsive} from "@/composables/responsive.js";
// COMPONENTS
// import ConfirmDeleteComponent from '@/components/widgets/modal/ConfirmDeleteComponent.vue';

const {filterDisplay, currentPageReportTemplate} = useResponsive();

const props = defineProps({
    stateKey: {type: String, required: true},
    service: {type: Function, required: true},
    searchId: {type: [String, Number, null], default: () => null},
    filters: {type: Object, required: true},
    scrollHeight: {type: String, default: () => ('57vh')},
});

const dataTable = ref(null);
const deleteModal = ref(null);

const handleRestoreFilters = () => (props.searchId ? restoreLazyParams() : restoreFilters());

const showFilterMenu = computed(() => {
    return filterDisplay == 'menu';
});

const {
    items,
    loading,
    lazyParams,
    totalRecords,
    onUpdate,
    getParams,
    loadLazyData,
    restoreFilters,
    restoreLazyParams,
} = useTables(dataTable, props.stateKey, props.filters, props.service, props.searchId);

defineExpose({handleRestoreFilters, loadLazyData, showFilterMenu, deleteModal, getParams});

</script>