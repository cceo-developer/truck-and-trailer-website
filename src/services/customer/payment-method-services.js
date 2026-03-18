import { useService } from "@/composables/service.js";

const service = useService()

export const moduleURI = "stripe/payment-methods";

export function getPaymentMethods(params) {
    return service.get(`/${moduleURI}`, {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField ?? params.orderBy ?? null,
        sortOrder: params.sortOrder ?? params.ascending ?? null,
        columns: typeof params.columns === 'string' ? params.columns : JSON.stringify(params.columns),
        filters: typeof params.filters === 'string' ? params.filters : JSON.stringify(params.filters),
    });
}

export function showPaymentMethod(id, columns = ['id']) {
    return service.get(`/${moduleURI}/${id}`, {
        columns: typeof columns === 'string' ? columns : JSON.stringify(columns)
    });
}

export function deletePaymentMethod(id) {
    return service.delete(`/${moduleURI}/${id}`);
}