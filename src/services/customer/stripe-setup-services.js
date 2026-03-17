import { useService } from "@/composables/service.js";

const service = useService()

const stripeModuleURI = 'stripe';

export function getSetupIntent(data) {
    return service.get(`/${stripeModuleURI}/setup-intent`, data);
}

export function getReservationPaymentIntent(data) {
    return service.get(`/${stripeModuleURI}/payment-intent/reservation`, data);
}