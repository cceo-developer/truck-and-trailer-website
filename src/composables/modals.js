/**
 *  This composable works in conjunction with the FormModal.vue component.
 *  Any adaptation for extra functionality, do so with a generic scope.
 * 
 *  @author: Jorge S. Leal <jorge.leal@cceo.com.mx>
 */

// IMPORTS
import { ref, nextTick, computed } from 'vue';
import useAppToast from '@/composables/toast.js';

const useModalForm = (emit, modal, defaultValues, _showService) => {

    const toast = useAppToast();

    const item = ref(Object.assign({}, defaultValues()));
    const readonly = ref(false);
    const option = ref('store');

    const defaultShowStore = async (other_values = {}) => {
        item.value = Object.assign({}, defaultValues(), other_values);
        readonly.value = false;
        option.value = 'store';
        await nextTick(() => modal.value.show());
    };

    const defaultShowRecord = async (id, update = false, other_values = {}) => {
        const response = await _showService(id, Object.keys(defaultValues()));
        item.value = Object.assign({}, defaultValues(), response, other_values);
        readonly.value = !update;
        option.value = update ? 'update' : 'show';
        await nextTick(() => modal.value.show()); 
    };

    const defaultAfterDone = (response) => {
        emit('done', response);
        toast.defaultSuccess();
        modal.value.setLoading(false);
        nextTick(() => modal.value.hide());
    }
    
    const defaultAfterError = (response) => {
        toast.defaultError(response.message ?? null);
        modal.value.setLoading(false);
    }

    const clearProperty = (property, default_value = null) => {
        if(!Array.isArray(property)) {
            property = [property];
        }
        for(const _property of property) {
            item.value[_property] = default_value;
        }
    }

    const modalHeaderPrefix = computed(() => {
        return option.value == 'store' ? 'Add new' : (option.value ==  'update' ? 'Edit' : 'See');
    })

    return {
        item,
        toast,
        option,
        readonly,
        modalHeaderPrefix,
        clearProperty,
        defaultShowStore,
        defaultShowRecord,
        defaultAfterDone,
        defaultAfterError
    };
}

export default useModalForm;