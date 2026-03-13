<template>
    <div class="w-full space-y-6">
        <div class="pt-8 flex justify-end">
            <SearchInput 
                v-model="search" :loading="loading" @search="$value => handleSearch($value)" @reset="onResetFilters" />
        </div>
        <div v-if="loading">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <template v-for="(vehicle_loading, index) in [1, 2, 3]" :key="`vehicle_${index}`">
                    <Skeleton width="100%" height="18rem" class="opacity-70" borderRadius="16px" />
                </template>
            </div>
        </div>
        <div v-else class="space-y-5">
            <template v-if="items.length > 0">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <template v-for="(vehicle, index) in items" :key="`vehicle_${index}`">
                        <VehicleItem :vehicle="vehicle" />
                    </template>
                </div>
                <div class="w-full pt-1 border-t border-zinc-300">
                    <Paginator
                        :rows="query.perPage" :totalRecords="total" :first="offset" :rowsPerPageOptions="[6, 10, 20]"
                        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                        @page="onPage"
                    />
                </div>
            </template>
            <template v-else>
                <div class="flex flex-col items-center">
                    <img :src="image" alt="Trailer" class="w-[20rem] opacity-60" />
                    <div class="text-zinc-600 text-lg">No information has been recorded</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import image from "@/assets/images/no_data_information.png";
import useCollection from '@/composables/useCollection.js';
import { getVehicles } from '@/services/customer/vehicle-services.js';
import VehicleItem from '@/components/customer/vehicles/VehicleItem.vue';
import SearchInput from '@/components/widgets/widgets/SearchInput.vue';

const search = ref(null);

const {
    items,
    total,
    query,
    offset,
    loading,
    resetFilters,
    setPage, 
    setPerPage, 
    setFilter,
    load
} = useCollection({
    storageKey: 'vehicles-cards',
    initialFilters: {search: {value: null}},
    initialSort: {field: 'id', direction: '-1'},
    initialPagination: {page: 1, perPage: 6},
    extraParams: {columns: [
        'id', 'name', 'year', 'brand_name', 'vehicle_type_name', 'insurance_policy_id', 'license_plate'
    ]},
    service: getVehicles,
});

const onPage = async (event) => {
    setPerPage(event.rows);
    setPage(Math.floor(event.first / event.rows) + 1);
    await load();
};

const onResetFilters = async () => {
    search.value = null;
    resetFilters();
    await load();
};

const handleSearch = async (filter) => {
    setFilter('search', {value: filter});
    await load();
};
</script>