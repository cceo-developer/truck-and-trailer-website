import { loadStripe } from '@stripe/stripe-js';
import { ref } from 'vue';
import { getSetupIntent, getReservationPaymentIntent } from '@/services/customer/stripe-setup-services.js';

const stripe = ref(null);
const elements = ref(null);

export function useStripeElements(metadata = {}) {
    return new Promise((resolve, reject) => {
        const appearance = {
            theme: 'stripe',
            variables: {
                colorPrimary: '#fb923c',
                fontFamily: 'Roboto, sans-serif',
            },
        };
        load().then(() => {
            getSetupIntent(metadata).then((response) => {
                elements.value = stripe.value.elements({
                    clientSecret: response.setup_intent,
                    appearance: appearance,
                    paymentMethodCreation: 'manual',
                });
                resolve(elements.value);
            }).catch((error) => {
                reject(error);
            })
        });
    });
}

export function usePaymentIntent(metadata = {}) {
    return new Promise((resolve, reject) => {
        const appearance = {
            theme: 'stripe',
            variables: {
                colorPrimary: '#fb923c',
                fontFamily: 'Roboto, sans-serif',
            },
        };
        load().then(() => {
            getReservationPaymentIntent(metadata).then((response) => {
                elements.value = stripe.value.elements({
                    clientSecret: response.payment_intent,
                    appearance: appearance,
                });
                resolve(elements.value);
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

async function load() {
    return new Promise((resolve) => {
        loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE).then((_stripe) => {
            stripe.value = _stripe;
            resolve();
        });
    });

}

export function useStripe() {
    if (stripe.value == null)
        load()
    return stripe;
}