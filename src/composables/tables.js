import { ref, onMounted, reactive } from 'vue';

const useTables = (dataTable, stateKey, _filters, _service, _search_id = null) => {

    const searchId = _search_id;

    let lazyParams = reactive({});
    const items = ref([]);
    const totalRecords = ref(0);
    const loading = ref(true);
    const filters = ref({});

    items.value = [];
    filters.value = _filters;
    onMounted(() => {
        Object.assign(lazyParams, {
            first: dataTable.value.first || 0,
            rows: dataTable.value.rows || 50,
            sortField: null,
            sortOrder: null,
            filters: filters.value,
        });
        loading.value = true;
        if (sessionStorage.getItem(stateKey) === null) {
            Object.assign(lazyParams, {
                first: dataTable.value.first || 0,
                rows: dataTable.value.rows || 50,
                sortField: null,
                sortOrder: null,
                filters: filters.value,
            });
        } else {
            Object.assign(
                lazyParams,
                JSON.parse(sessionStorage.getItem(stateKey))
            );
        }
        loading.value = false;
        loadLazyData();
    });


    const loadLazyData = () => {
        loading.value = true;
        let params = getParams();
        let _lazyParams = Object.assign({}, params, {
            filters: JSON.stringify(params.filters)
        });
        _service(_lazyParams).then((response) => {
            items.value = response.data;
            totalRecords.value = response.count;
        }).catch((err) => {
            items.value = [];
            totalRecords.value = 0;
            console.error(err);
        })
        .finally(() => {
            loading.value = false;
        });
    };

    const restoreFilters = () => {
        restoreLazyParams();
        loadLazyData();
    };

    const restoreLazyParams = () => {
        lazyParams.first = 0;
        lazyParams.rows = 50;
        lazyParams.sortField = null;
        lazyParams.sortOrder = null;
        lazyParams.filters = filters.value;
    };

    const onUpdate = (event) => {
        Object.assign(lazyParams, event);
        loadLazyData();
    };

    const getParams = () => {
        let fil = Object.assign({}, filters.value);
        let _fil = {};
        Object.keys(fil).map(function (key) {
            try {
                _fil[key] = {
                    value:
                        lazyParams.filters[key].value != null
                            ? (
                                Array.isArray(lazyParams.filters[key].value)
                                    ? lazyParams.filters[key].value
                                    : '%' + lazyParams.filters[key].value + '%'
                            )
                            : null,
                    matchMode: 'contains',
                };
            } catch {
                _fil[key] = { value: null, matchMode: 'contains' };
            }
        });

        return {
            first: lazyParams.first,
            rows: lazyParams.rows,
            orderBy: lazyParams.sortField,
            ascending: lazyParams.sortOrder,
            sortField: lazyParams.sortField,
            sortOrder: lazyParams.sortOrder,
            filters: Object.assign({}, _fil, {
                id: { value: searchId }
            })
        };
    };

    return {
        items,
        loading,
        lazyParams,
        totalRecords,
        onUpdate,
        getParams,
        loadLazyData,
        restoreFilters,
        restoreLazyParams,
    }
};

export default useTables;