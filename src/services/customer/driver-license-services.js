import { useService } from "@/composables/service.js";

const service = useService()

export const moduleURI = "drivers/driver-licenses";

export function getDriverLicenses(params) {
    return service.get(`/${moduleURI}`, {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField ?? params.orderBy ?? null,
        sortOrder: params.sortOrder ?? params.ascending ?? null,
        columns: typeof params.columns === 'string' ? params.columns : JSON.stringify(params.columns),
        filters: typeof params.filters === 'string' ? params.filters : JSON.stringify(params.filters),
    });
}

export function showDriverLicense(id, columns = ['id']) {
    return service.get(`${moduleURI}/${id}`, {
        columns: typeof columns === 'string' ? columns : JSON.stringify(columns)
    });
}

export function deleteDriverLicense(id) {
    return service.delete(`${moduleURI}/${id}`);
}

export function createDriverLicense(attributes) {
    return service.post(`/${moduleURI}`, attributes, { headers: { "Content-Type": "multipart/form-data" } });
}

export function updateDriverLicense(id, attributes) {
    return service.put(`/${moduleURI}/${id}`, attributes);
}

export function analyzeDriverLicense(image) {
    return service.post(`/${moduleURI}/analyze`, {
        image_to_be_analyzed: image
    }, { headers: { "Content-Type": "multipart/form-data" } });
}