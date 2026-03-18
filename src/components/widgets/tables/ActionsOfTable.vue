<template>
    <div class="space-y-3">
        <div class="flex justify-end">
            <div class="flex flex-row-reverse gap-x-2">
                <slot name="left" />
                <PrimaryButton 
                    v-if="props.showAdd && props.addPermission" @click="emit('addClick')">
                    <div class="flex items-center gap-x-2">
                        <i class="pi pi-plus" />
                        <div class="hidden sm:block">Add new record</div>
                    </div>
                </PrimaryButton>
                <SecondaryButton 
                    v-if="props.showRestore" @click="emit('restoreFilters')">
                    <div class="flex items-center gap-x-2">
                        <i class="pi pi-sliders-h" />
                        <div class="hidden sm:block">Restore filters</div>
                    </div>
                </SecondaryButton>
                <SecondaryButton 
                    v-if="props.showReload" v-tooltip.top="{value: 'Reload table', pt: {text: {class: 'bg-primary-600 font-semibold text-sm'}}}" @click="emit('refreshData')">
                    <i class="pi pi-sync" />
                </SecondaryButton>
                <SecondaryButton 
                    v-if="props.downloadService != null" :loading="loadingDownload" @click="handleDownload">
                    <div class="flex items-center gap-x-2">
                        <i class="pi pi-download" />
                        <div class="hidden sm:block">Export table</div>
                    </div>
                </SecondaryButton>
                <slot name="right" />
            </div>
        </div>
        <div class="flex justify-end">
            <ColumnSelector 
                v-model="selectedColumns" :stateKey="props.stateKey" :columnOptions="props.columnOptions" />			
        </div>	
    </div>
</template>

<script setup>
// IMPORTS
import {computed, ref} from 'vue';
import useAppToast from '@/composables/toast.js';
// COMPOSABLES
import useDownloader from '@/composables/downloader.js';
// COMPONENTS
import ColumnSelector from '@/components/widgets/tables/ColumnSelector.vue';

const toast = useAppToast();
const downloader = useDownloader();

const emit = defineEmits(['restoreFilters', 'refreshData', 'addClick', 'download']);

const props = defineProps({
    showAdd: {type: Boolean, default: () => true},
    showRestore: {type: Boolean, default: () => true},
    showReload: {type: Boolean, default: () => true},
    columnOptions: {type: Array, default: () => []},
    stateKey: {type: String, required: true},
    downloadService: {type: [Function, null], default: () => null},
    addPermission: {type: Boolean, default: () => true},
});

const selectedColumns = ref([]);
const loadingDownload = ref(false);

const columnsToShow = computed(() => {
    return props.columnOptions.filter(column => selectedColumns.value.includes(column.field));
});

const handleDownload = async () => {
    toast.defaultInfo('Downloading the file. This may take a few minutes.');
    loadingDownload.value = true;
    try {
        const response = await props.downloadService();
        downloader(new Blob([response]), `${props.stateKey}.xlsx`)
        toast.defaultSuccess('Download completed successfully.');
    } catch {
        toast.defaultError();
    } finally {
        loadingDownload.value = false;
    }
}

defineExpose({columnsToShow});
</script>