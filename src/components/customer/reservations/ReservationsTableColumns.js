import { readonly } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import useFormatter from '@/composables/formatter.js';
import { RESERVATION_STATUSES } from '@/constants/system_statuses.js';

const formatter = useFormatter();

const columns = [
    {
        field: 'id',
        header: 'ID',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false,
    },
    {
        field: 'global_folio',
        header: 'Reservation number',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true,
    },
    {
        field: 'user_id',
        header: 'ID User',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false,
    },
    {
        field: 'parking_lot_id',
        header: 'ID Parking lot',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false,
    },
    {
        field: 'parking_lot_name',
        header: 'Parking lot',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true,
    },
    {
        field: 'parking_lot_spot_name',
        header: 'Parking spot',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true,
    },
    {
        field: 'vehicle_id',
        header: 'ID Vehicle',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false,
    },
    {
        field: 'vehicle_name',
        header: 'Vehicle',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true,
    },
    {
        field: 'driver_license_id',
        header: 'Driver ID',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false,
    },
    {
        field: 'arrival_date',
        header: 'Arrival',
        filter: { value: null, matchMode: FilterMatchMode.DATE_IS },
        default: true,
    },
    {
        field: 'departure_date',
        header: 'Departure',
        filter: { value: null, matchMode: FilterMatchMode.DATE_IS },
        default: true,
    },
    {
        field: 'total',
        header: 'Total',
        bodyTemplate: (data) => (formatter.currency(data.total ?? 0)),
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true,
    },
    {
        field: 'active_status',
        header: 'Status',
        options: RESERVATION_STATUSES.map(element => {
            return { label: element.label, value: element.label }
        }),
        filter: { value: null, matchMode: FilterMatchMode.EQUALS },
        default: true,
    },
];
const filters = readonly(
    Object.fromEntries(
        columns.filter((column) => column.filter).map((column) => [column.field, column.filter])
    )
);
const defaultColumns = readonly(columns.filter((column) => column.default));

export { filters, defaultColumns };