/**
 *  This composable handles pagination and information filtering for index methods 
 *  without depending on the PrimeVue table.
 * 
 *  @author: Jorge S. Leal <jorge.leal@cceo.com.mx>
 */

import { ref, reactive, computed, onMounted, watch } from 'vue';

export default function useCollection(options = {}) {
    const {
        service,
        storageKey = null,
        initialFilters = {},
        initialSort = { field: null, direction: null },
        initialPagination = { page: 1, perPage: 50 },
        extraParams = {},
        immediate = true,
        transformFilters = null,
    } = options;

    const items = ref([]);
    const total = ref(0);
    const loading = ref(false);
    const error = ref(null);

    const query = reactive({
        page: initialPagination.page,
        perPage: initialPagination.perPage,
        sortBy: initialSort.field,
        sortDirection: initialSort.direction,
        filters: structuredClone(initialFilters),
    });

    const offset = computed(() => {
        return (query.page - 1) * query.perPage;
    });

    const buildFilters = () => {
        if (typeof transformFilters === 'function') {
            return transformFilters(query.filters);
        }

        const parsed = {};

        Object.keys(query.filters).forEach((key) => {
            const rawValue = query.filters[key]?.value ?? null;

            parsed[key] = {value: rawValue !== null && rawValue !== '' ? rawValue : null};
        });

        return parsed;
    };

    const buildParams = () => {
        return {
            // PAGINATION
            page: query.page,
            perPage: query.perPage,
            first: offset.value,
            rows: query.perPage,
            // SORT
            sortBy: query.sortBy,
            sortDirection: query.sortDirection,
            sortField: query.sortBy,
            sortOrder: query.sortDirection,
            orderBy: query.sortBy,
            ascending: query.sortDirection,
            // FILTERS
            filters: buildFilters(),
            ...extraParams,
        };
    };

    const load = async () => {
        loading.value = true;
        error.value = null;

        try {
            const params = buildParams();

            const response = await service(params);

            items.value = response.data ?? [];
            total.value = response.count ?? response.total ?? 0;
        } catch (err) {
            error.value = err;
            items.value = [];
            total.value = 0;
        } finally {
            loading.value = false;
        }
    };

    const setPage = (page) => {
        query.page = page;
    };

    const setPerPage = (perPage) => {
        query.perPage = perPage;
        query.page = 1;
    };

    const setSort = (field, direction) => {
        query.sortBy = field;
        query.sortDirection = direction;
        query.page = 1;
    };

    const setFilter = (key, value) => {
        query.filters[key] = value;
        query.page = 1;
    };

    const setFilters = (newFilters) => {
        query.filters = { ...query.filters, ...newFilters };
        query.page = 1;
    };

    const resetFilters = () => {
        query.filters = structuredClone(initialFilters);
        query.page = 1;
    };

    const resetQuery = () => {
        query.page = initialPagination.page;
        query.perPage = initialPagination.perPage;
        query.sortBy = initialSort.field;
        query.sortDirection = initialSort.direction;
        query.filters = structuredClone(initialFilters);
    };

    const hydrateFromStorage = () => {
        if (!storageKey) return;

        const saved = sessionStorage.getItem(storageKey);
        if (!saved) return;

        try {
            const parsed = JSON.parse(saved);

            query.page = parsed.page ?? query.page;
            query.perPage = parsed.perPage ?? query.perPage;
            query.sortBy = parsed.sortBy ?? query.sortBy;
            query.sortDirection = parsed.sortDirection ?? query.sortDirection;
            query.filters = parsed.filters ?? query.filters;
        } catch (e) {
            console.error('Could not restore collection state:', e);
        }
    };

    const persistToStorage = () => {
        if (!storageKey) return;

        sessionStorage.setItem(storageKey, JSON.stringify({
            page: query.page,
            perPage: query.perPage,
            sortBy: query.sortBy,
            sortDirection: query.sortDirection,
            filters: query.filters,
        }));
    };

    watch(
        query,
        () => {
            persistToStorage();
        },
        { deep: true }
    );

    onMounted(() => {
        hydrateFromStorage();

        if (immediate) {
            load();
        }
    });

    return {
        items,
        total,
        loading,
        error,
        query,
        offset,
        buildParams,
        load,
        setPage,
        setPerPage,
        setSort,
        setFilter,
        setFilters,
        resetFilters,
        resetQuery,
    };
}