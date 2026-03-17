import { useService } from "@/composables/service.js";

const service = useService()
export const countryModuleURI = "geography/countries";

export function getCountries(params) {
    return service.get(countryModuleURI, {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField ?? params.orderBy,
        sortOrder: params.sortOrder ?? params.ascending,
        columns: typeof params.columns === 'string' ? params.columns : JSON.stringify(params.columns),
        filters: typeof params.filters === 'string' ? params.filters : JSON.stringify(params.filters),
    });
}

export function showCountry(id, columns = ['id']) {
    return service.get(`${countryModuleURI}/${id}`, {
        columns: typeof columns === 'string' ? columns : JSON.stringify(columns)
    });
}