<template>
    <div class="w-full space-y-6">
        <div class="pt-8 flex justify-end">
            <SearchInput 
                v-model="search" :loading="loading" @search="$value => handleSearch($value)" @reset="onResetFilters" />
        </div>
        <div v-if="loading">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <template v-for="(driver_license_loading, index) in [1, 2, 3]" :key="`driver_license_${index}`">
                    <Skeleton width="100%" height="18rem" class="opacity-70" borderRadius="16px" />
                </template>
            </div>
        </div>
        <div v-else class="space-y-5">
            <template v-if="items.length > 0">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <template v-for="(driver_license, index) in items" :key="`driver_license_${index}`">
                        <DriverLicenseItem :driverLicense="driver_license" @view-details="$id => modal.showRecord($id)" />
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
                    <img :src="image" alt="No data" class="w-[20rem] opacity-60" />
                    <div class="text-zinc-600 text-lg">No information has been recorded</div>
                    <div class="pt-10">
                        <SecondaryButton @click="() => readModal.showStore()">
                            <i class="fa-solid fa-plus"></i>
                            add your first driver license to get started
                        </SecondaryButton>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <DriverLicensesModal ref="modal" @done="load()" />
    <ReadDriverLicenseModal ref="readModal" @done="load()" />
</template>

<script setup>
import {ref} from 'vue';
import image from "@/assets/images/no_data_information.png";
import useCollection from '@/composables/useCollection.js';
import { getDriverLicenses } from '@/services/customer/driver-license-services.js';
import DriverLicenseItem from '@/components/customer/driver-licenses/DriverLicenseItem.vue';
import SearchInput from '@/components/widgets/widgets/SearchInput.vue';
import DriverLicensesModal from '@/components/customer/driver-licenses/DriverLicensesModal.vue';
import ReadDriverLicenseModal from "@/components/customer/driver-licenses/read-ai/ReadDriverLicenseModal.vue";

const modal = ref(null);
const readModal = ref(null);

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
    storageKey: 'driver-licenses-cards',
    initialFilters: {search: {value: null}},
    initialSort: {field: 'id', direction: '-1'},
    initialPagination: {page: 1, perPage: 6},
    extraParams: {columns: [
        'id', 'driver_name', 'driver_birthdate', 'state_name', 'country_name', 'address', 'expiration_date', 'license_number'
    ]},
    service: getDriverLicenses,
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

const openModal = () => {
    readModal.value.showStore();
}

defineExpose({ openModal });
</script>
