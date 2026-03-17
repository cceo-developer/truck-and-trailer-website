<template>
    <div class="space-y-6">
        <TableContainer 
            ref="table" :stateKey="stateKey" :service="serviceGetIndex" :filters="filters">
            <template #columns>
                <Column
                    v-for="column in defaultColumns" :key="column.field"
                    :field="column.field" :header="column.header" :showFilterMenu="table.showFilterMenu"
                    :sortable="column.sortable ? column.sortable.value : true"
                    :show-filter-match-modes="false" :show-apply-button="false" :show-clear-button="false">
                    <template #body="{ data }">
                        <SystemStatusColumn v-if="column.field == 'payment_status'" :status="data.payment_status" :options="RESERVATION_PAYMENT_STATUSES" />
                        <SystemStatusColumn v-else-if="column.field == 'active_status'" :status="data.active_status" :options="RESERVATION_STATUSES" />
                        <DateTimeColumn v-else-if="column.field == 'arrival_date'" :value="data.arrival_date" withTime />
                        <DateTimeColumn v-else-if="column.field == 'departure_date'" :value="data.departure_date" withTime />
                        <DefaultColumn v-else :column="column" :data="data" />
                    </template>
                    <template #filter="{filterModel, filterCallback}">
                        <template v-if="filterModel">
                            <DefaultFilter 
                                v-model="filterModel.value" :column="column" :options="column.options ?? []" @change="filterCallback()" />
                        </template>
                    </template>
                </Column>
            </template>
        </TableContainer>
    </div>
</template>

<script setup>
// IMPORTS
import {ref, computed} from 'vue';
// TABLE
import {defaultColumns, filters} from '@/components/customer/reservations/ReservationsTableColumns.js';
import TableContainer from '@/components/widgets/tables/TableContainer.vue';
import DefaultColumn from '@/components/widgets/tables/DefaultColumn.vue';
import DefaultFilter from '@/components/widgets/tables/DefaultFilter.vue';
import SystemStatusColumn from '@/components/widgets/columns/SystemStatusColumn.vue';
// SERVICE
import {getReservations} from '@/services/customer/reservation-services.js';
// CONSTANTS
import {RESERVATION_PAYMENT_STATUSES, RESERVATION_STATUSES} from '@/constants/system_statuses.js';
import DateTimeColumn from '@/components/widgets/tables/DateTimeColumn.vue';

const table = ref({});
const stateKey = "reservations_table";

const serviceGetIndex = computed(() => {
    return (params) => getReservations({
        ...params,
        filters: JSON.stringify({
            ...JSON.parse(params.filters),
            only_amenities: {value: false},
        })
    })
});

</script>
