<template>
    <FormModal ref="modal" :header="`${modalHeaderPrefix} driver license`" :alv="alvDriverLicense" :readonly="readonly">
        <alv-form
            id="alv-driver-license" ref="alvDriverLicense" input-parent-selector=".form-error" :action="alvAction"
            @after-done="defaultAfterDone" @after-error="defaultAfterError">
            <div class="space-y-6">
                <FormSection :cols="1" title="Driver license information" subtitle="Required general information for record" :show-title="!readonly">
                    <div class="form-error">
                        <InputLabel for="driver_name" label="Driver name:" required :readonly="readonly" />
                        <InputText v-model="item.driver_name" name="driver_name" :disabled="readonly" class="w-full" />
                    </div>
                </FormSection>
                <FormSection :cols="2">
                    <div class="form-error">
                        <InputLabel for="license_number" label="License number:" required :readonly="readonly" />
                        <InputText v-model="item.license_number" name="license_number" :disabled="readonly" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="driver_birthdate" label="Driver birthdate:" required :readonly="readonly" />
                        <CalendarField v-model="item.driver_birthdate" name="driver_birthdate" :disabled="readonly" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="issue_date" label="Issue date:" required :readonly="readonly" />
                        <CalendarField v-model="item.issue_date" name="issue_date" :disabled="readonly" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="expiration_date" label="Expiration date:" required :readonly="readonly" />
                        <CalendarField v-model="item.expiration_date" name="expiration_date" :disabled="readonly" />
                    </div>
                    <div class="form-error md:col-span-2">
                        <InputLabel for="address" label="Address:" required :readonly="readonly" />
                        <InputText v-model="item.address" name="address" :disabled="readonly" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="country_id" label="Country:" required :readonly="readonly" />
                        <CountriesDropdown 
                            v-model="item.country_id" :disabled="readonly" :showClear="false" 
                            @update:model-value="clearProperty('state_id')" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="state_id" label="State:" required :readonly="readonly" />
                        <StatesDropdown 
                            v-model="item.state_id" :disabled="readonly" :showClear="false" :filters="stateFilters" />
                    </div>
                </FormSection>
            </div>	
        </alv-form>
        <template #footer-left>
            <AlertButton v-if="readonly" @click="deleteModal.showConfirm('drivers/driver-licenses', item.id)">
                Delete driver license record
            </AlertButton> 
        </template>
    </FormModal>
    <ConfirmDeleteModal ref="deleteModal" @done="handleDeletedRecord" />
</template>

<script setup>
// IMPORTS
import {computed, ref} from "vue";
// SERVICES
import {createDriverLicense, updateDriverLicense, showDriverLicense} from '@/services/customer/driver-license-services.js';
// COMPOSABLES
import useModalForm from '@/composables/modals.js';
// COMPONENTS
import FormModal from '@/components/widgets/modal/FormModal.vue';
import CalendarField from "@/components/widgets/dates/CalendarField.vue";
import ConfirmDeleteModal from "@/components/widgets/modal/ConfirmDeleteModal.vue";
import CountriesDropdown from "@/components/widgets/dropdowns/CountriesDropdown.vue";
import StatesDropdown from "@/components/widgets/dropdowns/StatesDropdown.vue";

const deleteModal = ref(null);

const defaultValues = () => ({
    id: null,
    driver_name: null,
    license_number: null,
    driver_birthdate: null,
    expiration_date: null,
    issue_date: null,
    address: null,
    country_id: null,
    state_id: null,
});

const modal = ref(null);
const alvAction = ref();
const alvDriverLicense = ref(null);

const emit = defineEmits(['done']);

const showStore = () => {
    alvAction.value = () => createDriverLicense(item.value);
    defaultShowStore();
};

const showRecord = (id, update = false) => {
    alvAction.value = () => updateDriverLicense(id, item.value);
    defaultShowRecord(id, update);
}

const handleDeletedRecord = () => {
    emit('done');
    modal.value.hide();
}

const stateFilters = computed(() => {
    return {
        country_id: {value: item.value.country_id ?? -1, matchMode: 'equals'}
    }
})

const {
    item, modalHeaderPrefix, readonly, 
    clearProperty, defaultAfterDone, defaultAfterError, defaultShowStore, defaultShowRecord,
} = useModalForm(emit, modal, defaultValues, showDriverLicense);

defineExpose({showStore, showRecord});
</script>
