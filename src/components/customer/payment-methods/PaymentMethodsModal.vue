<template>
    <FormModal ref="modal" :header="`${modalHeaderPrefix} payment method`" :alv="null" :readonly="true">
        <div class="space-y-6">
            <FormSection :cols="1" title="General information" subtitle="Required cardholder and card information">
                <div v-if="stripeComponent && !stripeComponent.loading" class="form-error">
                    <InputLabel for="name" label="Name of the holder:" />
                    <InputText v-model="item.name" name="name" class="w-full" />
                </div>
                <template v-else>
                    <Skeleton class="opacity-50" height="3rem" />
                    <Skeleton class="opacity-50" height="18rem" />
                </template>
                <CardComponent 
                    ref="stripeComponent" @complete="$value => stripeStatus = $value" />
            </FormSection>
        </div>	
        <template #footer-left>
            <div>
                <PrimaryButton 
                    :disabled="!stripeStatus || item.name == null" 
                    :loading="loading" @click="savePaymentMethod">
                    <div class="flex items-center justify-center gap-x-2">
                        <i class="pi pi-bookmark" /><div>Save</div>
                    </div>	
                </PrimaryButton>
            </div>
        </template>
    </FormModal>
</template>

<script setup>
// IMPORTS
import {ref} from "vue";
// COMPOSABLES
import useModalForm from '@/composables/modals.js';
import {useStripe} from '@/composables/stripe-elements.js';
// COMPONENTS
import FormModal from '@/components/widgets/modal/FormModal.vue';
import CardComponent from '@/components/customer/payment-methods/CardComponent.vue';

const defaultValues = () => ({
    name: null,
});

const modal = ref(null);

const stripeComponent = ref(null);
const stripeStatus = ref(true);
const loading = ref(false);

const emit = defineEmits(['done']);

const showStore = () => {
    defaultShowStore();
};

const savePaymentMethod = async () => {
    loading.value = true;

    const stripe = useStripe();
    const elements = stripeComponent.value.elements;

    try {
        await elements.submit();

        const result = await stripe.value.confirmSetup({
            elements: elements,
            confirmParams: {
                payment_method_data: {
                    billing_details: {
                        name: item.value.name,
                    },
                }
            },
            redirect: 'if_required'
        });
        
        if(result.error) {
            toast.defaultError(result.error.message ?? null);
            loading.value = false;
            return;
        }
        setTimeout(() => {
            loading.value = false;
            modal.value.hide();
            location.reload();
        }, 1000);
    } catch (e) {
        toast.defaultError(e.message ?? null);
        loading.value = false;
    }
}

const {
    item, modalHeaderPrefix, defaultShowStore, toast
} = useModalForm(emit, modal, defaultValues, () => {});

defineExpose({showStore});
</script>