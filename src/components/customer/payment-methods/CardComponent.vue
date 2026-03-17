<template>
    <div id="payment-element" />
</template>

<script setup>
// IMPORTS
import {onMounted, ref} from 'vue';
// COMPOSABLES
import { useStripeElements } from '@/composables/stripe-elements.js';

const elements = ref(null);
const loading = ref(false);

const props = defineProps({
    userId: {type: [Number, null, String], required: true}
});

const emit = defineEmits(['blur', 'focus', 'complete'])

onMounted(() =>  {
    loading.value = true;
    useStripeElements({user_id: props.userId}).then((_elements) => {
        elements.value = _elements;
        const options = {
            layout: 'tabs',
            defaultCollapsed: false,
            paymentMethodOrder: ['card'],
            wallets: {
                applePay: 'never',
                googlePay: 'never',
                paypal: 'never',
                link: 'never',
            },
            readOnly: false,
        };
  
        const paymentElement = elements.value.create('payment', options);

        paymentElement.mount('#payment-element');
        paymentElement.on('blur', function() {
            emit('blur');
        });
        paymentElement.on('focus', function() {
            emit('focus');
        });
        paymentElement.on('change', function(event) {
            emit('complete', event.complete);
        });
    }).finally(() => {
        loading.value = false;
    })
})
defineExpose({elements, loading});
</script>