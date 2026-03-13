<template>
    <div class="w-full space-y-6">
        <div class="pt-8 flex justify-end">
            <div class="flex items-center gap-x-2">
                <FloatLabel variant="on">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText 
                            id="search" v-model="search" name="search" fluid style="border-radius: 30px; width: 35rem;"
                            @update:model-value="$value => handleGlobalFilter($value)" />
                        <InputIcon v-if="loading" class="pi pi-spin pi-spinner" />
                        <InputIcon v-else-if="search !== null">
                            <button 
                                type="button" v-tooltip.right="{value: 'Reset filters', pt: {text: {class: '!bg-zinc-950 !font-semibold !text-sm !min-w-max'}}}"
                                class="text-zinc-400 hover:text-zinc-700" @click="onResetFilters">
                                <i class="fa-solid fa-xmark" style="font-size: 1rem;" />
                            </button>
                        </InputIcon>
                    </IconField>
                    <FormLabel for="search" label="Search" />
                </FloatLabel>
            </div>
        </div>
        <div v-if="loading">
            <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
                <template v-for="(pm_loading, index) in [1, 2, 3, 4]" :key="`pm_${index}`">
                    <Skeleton width="100%" height="14rem" class="opacity-70" borderRadius="16px" />
                </template>
            </div>
        </div>
        <div v-else class="space-y-5">
            <template v-if="items.length > 0">
                <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    <template v-for="(pm, index) in items" :key="`pm_${index}`">
                        <PaymentMethodsItem :paymentMethod="pm" />
                    </template>
                </div>
                <div class="w-full">
                    <Paginator
                        :rows="query.perPage" :totalRecords="total" :first="offset" :rowsPerPageOptions="[6, 12, 24]"
                        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                        @page="onPage"
                    />
                </div>
            </template>
            <template v-else>
                <div class="flex flex-col items-center">
                    <img :src="image" alt="No data" class="w-[20rem] opacity-60" />
                    <div class="text-zinc-600 text-lg">No payment methods have been recorded</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import image from "@/assets/images/no_data_information.png";
import useCollection from '@/composables/useCollection.js';
import { getPaymentMethods } from '@/services/customer/payment-method-services.js';
import PaymentMethodsItem from '@/components/customer/payment-methods/PaymentMethodsItem.vue';
import {debounce} from 'lodash';

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
    storageKey: 'payment-methods-cards',
    initialFilters: {search: {value: null}},
    initialSort: {field: 'id', direction: '-1'},
    initialPagination: {page: 1, perPage: 6},
    extraParams: {columns: [
        'id', 'card_brand', 'card_funding', 'card_expires_at', 'last4', 'name'
    ]},
    service: getPaymentMethods,
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

const handleGlobalFilter = debounce(async (filter) => {
    let _filter = filter?.trim();
    if(_filter === '' || _filter === null) {
        search.value = null;
    }
    setFilter('search', {value: _filter});
    await load();
}, 900);

</script>
