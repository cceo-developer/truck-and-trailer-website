<template>
    <div class="bg-slate-900 text-slate-100">
        <div class="max-w-7xl mx-auto px-4 py-12 gap-8 items-center">
            <div class="bg-slate-900 h-full">
                <span class="text-sm tracking-widest uppercase text-primary-300">Payment Methods</span>
                <h1 class="mt-2 text-3xl md:text-4xl font-bold">
                    My payment methods
                </h1>
                <p class="mt-4 text-slate-300">
                    Review and manage the payment methods currently saved to your account.
                </p>
            </div>
        </div>
    </div>
    <div class="pt-2 pb-12">
        <div class="max-w-7xl mx-auto px-8 md:px-4 gap-10">
            <PaymentMethodsPanel />
        </div>
    </div>
</template>

<script setup>
import PaymentMethodsPanel from '@/components/customer/payment-methods/PaymentMethodsPanel.vue';
</script>
