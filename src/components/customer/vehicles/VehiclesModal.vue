<template>
    <FormModal ref="modal" :header="`${modalHeaderPrefix} vehicle`" :alv="alvVehicle" :readonly="readonly">
        <alv-form
            id="alv-vehicle-types" ref="alvVehicle" input-parent-selector=".form-error" :action="alvAction"
            @after-done="defaultAfterDone" @after-error="defaultAfterError">
            <div class="space-y-6">
                <FormSection :cols="1" title="Vehicle information" subtitle="Required general information for record" :show-title="!readonly">
                    <div class="form-error">
                        <InputLabel for="name" label="Name:" required :readonly="readonly" />
                        <InputText v-model="item.name" name="name" :disabled="readonly" class="w-full" />
                    </div>
                </FormSection>
                <FormSection :cols="2">
                    <div class="form-error">
                        <InputLabel for="vehicle_type_id" label="Vehicle type:" required :readonly="readonly" />
                        <VehicleTypesDropdown v-model="item.vehicle_type_id" :disabled="readonly" :showClear="false" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="license_plate" label="License plate:" required :readonly="readonly" />
                        <InputText v-model="item.license_plate" name="license_plate" :disabled="readonly" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="brand_id" label="Make:" required :readonly="readonly" />
                        <BrandsDropdown v-model="item.brand_id" :disabled="readonly" :showClear="false" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="year" label="Year:" required :readonly="readonly" />
                        <YearField v-model="item.year" name="year" :disabled="readonly" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="unit_number" label="Unit number:" :readonly="readonly" />
                        <InputText v-model="item.unit_number" name="unit_number" :disabled="readonly" class="w-full" />
                    </div>
                    <div v-if="readonly" class="form-error">
                        <InputLabel for="created_at" label="Created date:" :readonly="readonly" />
                        <InputText :modelValue="item.created_at" name="created_at" :disabled="readonly" class="w-full" />
                    </div>
                </FormSection>
            </div>	
        </alv-form>
        <template #footer-left>
            <AlertButton v-if="readonly" @click="deleteModal.showConfirm('vehicles/vehicles', item.id)">
                Delete vehicle record
            </AlertButton> 
        </template>
    </FormModal>
    <ConfirmDeleteModal ref="deleteModal" @done="handleDeletedRecord" />
</template>

<script setup>
// IMPORTS
import {ref} from "vue";
// SERVICES
import {createVehicle, updateVehicle, showVehicle} from '@/services/customer/vehicle-services.js';
// COMPOSABLES
import useModalForm from '@/composables/modals.js';
// COMPONENTS
import FormModal from '@/components/widgets/modal/FormModal.vue';
import YearField from "@/components/widgets/dates/YearField.vue";
import VehicleTypesDropdown from "@/components/widgets/dropdowns/VehicleTypesDropdown.vue";
import BrandsDropdown from "@/components/widgets/dropdowns/BrandsDropdown.vue";
import ConfirmDeleteModal from "@/components/widgets/modal/ConfirmDeleteModal.vue";

const deleteModal = ref(null);

const defaultValues = () => ({
    id: null,
    brand_id: null,
    name: null,
    license_plate: null,
    year: null,
    vehicle_type_id: null,
    unit_number: null,
    created_at: null
});

const modal = ref(null);
const alvAction = ref();
const alvVehicle = ref(null);

const emit = defineEmits(['done']);

const showStore = () => {
    alvAction.value = () => createVehicle(item.value);
    defaultShowStore();
};

const showRecord = (id, update = false) => {
    alvAction.value = () => updateVehicle(id, item.value);
    defaultShowRecord(id, update);
}

const handleDeletedRecord = () => {
    emit('done');
    modal.value.hide();
}

const {
    item, modalHeaderPrefix, readonly, 
    defaultAfterDone, defaultAfterError, defaultShowStore, defaultShowRecord,
} = useModalForm(emit, modal, defaultValues, showVehicle);

defineExpose({showStore, showRecord});
</script>