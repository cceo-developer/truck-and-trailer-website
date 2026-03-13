import {useService} from "@/composables/service.js";

const service = useService()

export const vehicleModuleURI = "vehicles/vehicles";

export function getVehicles(params) {
    return service.get(`/${vehicleModuleURI}`, {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField ?? params.orderBy ?? null,
        sortOrder: params.sortOrder ?? params.ascending ?? null,
        columns: typeof params.columns === 'string' ? params.columns : JSON.stringify(params.columns ?? []),
        filters: typeof params.filters === 'string' ? params.filters : JSON.stringify(params.filters ?? {}),
    });
}

export function showVehicle(id, columns = ['id']) {
    return service.get(`${vehicleModuleURI}/${id}`, {
        columns: typeof columns === 'string' ? columns : JSON.stringify(columns)
    });
}

export function deleteVehicle(id) {
    return service.delete(`${vehicleModuleURI}/${id}`);
}

export function createVehicle(attributes) {
    return service.post(`/${vehicleModuleURI}`, attributes);
}

export function updateVehicle(id, attributes) {
    return service.put(`/${vehicleModuleURI}/${id}`, attributes);
}