<template>
    <div class="w-full space-y-6">
        <div class="pt-8 flex justify-end">
            <SearchInput 
                v-model="search" :loading="loading" @search="$value => handleSearch($value)" @reset="onResetFilters" />
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
                        <PaymentMethodsItem :paymentMethod="pm" @delete-payment-method="deleteModal.showConfirm('stripe/payment-methods', pm.id)" />
                    </template>
                </div>
                <div class="w-full pt-1 border-t border-zinc-300">
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
                    <div class="pt-10">
                        <SecondaryButton @click="() => modal.showStore()">
                            <i class="fa-solid fa-plus"></i>
                            add your first payment method to get started
                        </SecondaryButton>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <PaymentMethodsModal ref="modal" />
    <ConfirmDeleteModal ref="deleteModal" @done="load()" />
</template>

<script setup>
import {ref} from 'vue';
import image from "@/assets/images/no_data_information.png";
import useCollection from '@/composables/useCollection.js';
import { getPaymentMethods } from '@/services/customer/payment-method-services.js';
import PaymentMethodsItem from '@/components/customer/payment-methods/PaymentMethodsItem.vue';
import SearchInput from '@/components/widgets/widgets/SearchInput.vue';
import ConfirmDeleteModal from "@/components/widgets/modal/ConfirmDeleteModal.vue";
import PaymentMethodsModal from './PaymentMethodsModal.vue';

const modal = ref(null);
const deleteModal = ref(null);

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

const handleSearch = async (filter) => {
    setFilter('search', {value: filter});
    await load();
};

const openModal = () => {
    modal.value.showStore();
}

defineExpose({ openModal });

</script>
