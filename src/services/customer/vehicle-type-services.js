import {useService} from "@/composables/service.js";

const service = useService();

const vehicleTypeModuleURI = 'vehicles/vehicle-types';

export function getVehicleTypes(params) {
    return service.get(`/${vehicleTypeModuleURI}`, {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField ?? params.orderBy,
        sortOrder: params.sortOrder ?? params.ascending,
        columns: typeof params.columns === 'string' ? params.columns : JSON.stringify(params.columns),
        filters: typeof params.filters === 'string' ? params.filters : JSON.stringify(params.filters),
    });
}

export function showVehicleType(id, columns = ['id']) {    
    return service.get(`/${vehicleTypeModuleURI}/${id}`, {
        columns: typeof columns === 'string' ? columns : JSON.stringify(columns)
    });
}