<template>
    <FormModal ref="modal" header="Add new driver license" :alv="alvDriverLicenseAI" :readonly="false">
        <alv-form
            id="alv-driver-licenses-AI" ref="alvDriverLicenseAI" input-parent-selector=".form-error" :action="alvAction"
            @after-done="defaultAfterDone" @after-error="defaultAfterError">
            <div class="space-y-6">
                <FormSection :cols="1" title="Driver license" subtitle="Upload a photo of the driver's license">
                    <LoadDriverLicenseImage v-model="item" v-model:loading="loadingAnalysis" :toast="toast" :defaultValues="defaultValues" />
                </FormSection>
                <FormSection v-if="item.image_to_upload && !loadingAnalysis" :cols="2">
                    <div class="form-error md:col-span-2">
                        <InputLabel for="driver_name" label="Driver name:" required />
                        <InputText id="driver_name" v-model="item.driver_name" name="driver_name" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="license_number" label="License number:" required />
                        <InputText id="license_number" v-model="item.license_number" name="license_number" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="driver_birthdate" label="Driver birthdate:" required />
                        <CalendarField
                            v-model="item.driver_birthdate" name="driver_birthdate" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="expiration_date" label="Expiration date:" required />
                        <CalendarField
                            v-model="item.expiration_date" name="expiration_date" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="issue_date" label="Issue date:" required />
                        <CalendarField
                            v-model="item.issue_date" name="issue_date" class="w-full" />
                    </div>
                    <div class="form-error md:col-span-2">
                        <InputLabel for="address" label="Address:" required />
                        <InputText id="address" v-model="item.address" name="address" class="w-full" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="country_id" label="Country:" required />
                        <CountriesDropdown 
                            v-model="item.country_id" :showClear="false" 
                            @update:model-value="clearProperty('state_id')" />
                    </div>
                    <div class="form-error">
                        <InputLabel for="state_id" label="State:" required />
                        <StatesDropdown 
                            v-model="item.state_id" :showClear="false" :filters="stateFilters" />
                    </div>
                </FormSection>
            </div>	
        </alv-form>
    </FormModal>
</template>

<script setup>
// IMPORTS
import {computed, ref} from "vue";
// SERVICES
import {createDriverLicense} from '@/services/customer/driver-license-services.js';
// COMPOSABLES
import useModalForm from '@/composables/modals.js';
// COMPONENTS
import FormModal from '@/components/widgets/modal/FormModal.vue';
import CountriesDropdown from '@/components/widgets/dropdowns/CountriesDropdown.vue';
import StatesDropdown from '@/components/widgets/dropdowns/StatesDropdown.vue';
import CalendarField from "@/components/widgets/dates/CalendarField.vue";
import LoadDriverLicenseImage from "@/components/customer/driver-licenses/read-ai/LoadDriverLicenseImage.vue";

const props = defineProps({
    customerId: {type: [Number, String, null], default: () => null}
});

const defaultValues = () => ({
    user_id: null,
    image_to_upload: null,
    driver_name: null,
    driver_birthdate: null,
    address: null,
    state_id: null,
    country_id: null,
    expiration_date: null,
    issue_date: null,
    license_number: null,
});

const modal = ref(null);
const alvAction = ref();
const alvDriverLicenseAI = ref(null);

const loadingAnalysis = ref(false);

const emit = defineEmits(['done']);

const showStore = () => {
    alvAction.value = () => createDriverLicense(item.value);
    defaultShowStore({user_id: props.customerId});
};

const stateFilters = computed(() => {
    return {
        country_id: {value: item.value.country_id ?? -1, matchMode: 'equals'}
    }
})

const {
    item, toast, defaultAfterDone, defaultAfterError, defaultShowStore, clearProperty
} = useModalForm(emit, modal, defaultValues);

defineExpose({showStore});
</script>