import {useService} from "@/composables/service.js";

const service = useService()

export const moduleURI = "vehicles/brands";

export function getBrands(params) {
    return service.get(`/${moduleURI}`, {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField ?? params.orderBy,
        sortOrder: params.sortOrder ?? params.ascending,
        columns: typeof params.columns === 'string' ? params.columns : JSON.stringify(params.columns),
        filters: typeof params.filters === 'string' ? params.filters : JSON.stringify(params.filters),
    });
}

export function showBrand(id, columns = ['id']) {
    return service.get(`/${moduleURI}/${id}`, {
        columns: typeof columns === 'string' ? columns : JSON.stringify(columns)
    });
}