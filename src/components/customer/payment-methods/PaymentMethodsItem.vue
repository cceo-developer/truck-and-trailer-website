<template>
    <div class="border border-zinc-300 rounded-2xl h-full flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-zinc-400 bg-white overflow-hidden relative group">
        <!-- Decorative subtle background -->
        <div class="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-zinc-100/30 pointer-events-none"></div>

        <div class="p-6 md:p-8 space-y-6 flex flex-col flex-1 justify-between relative z-10">
            <div class="flex justify-between items-start gap-4">
                <div class="h-4 md:h-6 shrink-0">
                    <img v-if="brandLogo" :src="brandLogo" :alt="props.paymentMethod.card_brand" class="h-full w-auto object-contain" />
                    <div v-else class="h-full flex items-center text-zinc-400 text-3xl">
                        <i class="fa-regular fa-credit-card"></i>
                    </div>
                </div>
                <div class="shrink-0">
                    <span v-if="props.paymentMethod.card_funding === 'credit'" class="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Credit
                    </span>
                    <span v-else-if="props.paymentMethod.card_funding === 'debit'" class="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Debit
                    </span>
                    <span v-else class="bg-zinc-100 text-zinc-600 border border-zinc-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Card
                    </span>
                </div>
            </div>
            
            <div class="space-y-2">
                <div class="flex items-center gap-x-3 text-zinc-700">
                    <span class="flex gap-x-1 text-xs text-zinc-400 mt-1">
                        <i class="fa-solid fa-circle" style="font-size: 0.4rem;" v-for="i in 4" :key="i"></i>
                    </span>
                    <span class="flex gap-x-1 text-xs text-zinc-400 mt-1">
                        <i class="fa-solid fa-circle" style="font-size: 0.4rem;" v-for="i in 4" :key="i"></i>
                    </span>
                    <span class="flex gap-x-1 text-xs text-zinc-400 mt-1">
                        <i class="fa-solid fa-circle" style="font-size: 0.4rem;" v-for="i in 4" :key="i"></i>
                    </span>
                    <span class="font-mono text-xl tracking-widest font-semibold ml-1 text-zinc-800">{{ props.paymentMethod.last4 }}</span>
                </div>
            </div>
            
            <div class="flex justify-between items-end mt-auto border-t pt-2 border-zinc-100">
                <div class="space-y-1">
                    <div class="text-[0.65rem] uppercase tracking-wider text-zinc-400 font-semibold">Card Holder</div>
                    <div class="font-medium text-sm text-zinc-800 uppercase tracking-wide truncate max-w-[140px] md:max-w-[200px]" :title="props.paymentMethod.name">
                        {{ props.paymentMethod.name || 'N/A' }}
                    </div>
                </div>
                <div class="space-y-1 text-right">
                    <div class="text-[0.65rem] uppercase tracking-wider text-zinc-400 font-semibold">Expires</div>
                    <div class="font-mono text-sm font-medium text-zinc-800 bg-zinc-200/60 px-2 pt-1 rounded">
                        {{ formatExpiration || '--/--' }}
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Hover actions overlay -->
        <div class="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 gap-3 z-20">
            <button type="button" class="flex-1 bg-white border border-zinc-200 text-zinc-700 py-3 rounded-xl hover:border-zinc-300 hover:bg-zinc-50 font-medium transition-colors flex items-center justify-center gap-2">
                <i class="fa-regular fa-pen-to-square"></i> Edit
            </button>
            <button type="button" class="bg-red-50 text-red-600 border border-red-100 p-3 rounded-xl hover:bg-red-100 hover:border-red-200 transition-colors w-12 flex items-center justify-center">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import amexLogo from '@/assets/images/cards/american_express_logo.png';
import dinersLogo from '@/assets/images/cards/diners_club_logo.png';
import discoverLogo from '@/assets/images/cards/discover_logo.png';
import mastercardLogo from '@/assets/images/cards/mastercard_logo.png';
import unionpayLogo from '@/assets/images/cards/union_pay_logo.png';
import visaLogo from '@/assets/images/cards/visa_logo.png';

const props = defineProps({
    paymentMethod: { type: Object, required: true }
});

const brandLogo = computed(() => {
    const brand = props.paymentMethod.card_brand?.toLowerCase();
    switch (brand) {
        case 'amex':
        case 'american express': return amexLogo;
        case 'diners':
        case 'diners club': return dinersLogo;
        case 'discover': return discoverLogo;
        case 'mastercard': return mastercardLogo;
        case 'unionpay': return unionpayLogo;
        case 'visa': return visaLogo;
        default: return null;
    }
});

const formatExpiration = computed(() => {
    if (!props.paymentMethod.card_expires_at) return '';
    try {
        const date = new Date(props.paymentMethod.card_expires_at);
        if(isNaN(date)) return props.paymentMethod.card_expires_at;
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${month}/${year}`;
    } catch (e) {
        return props.paymentMethod.card_expires_at;
    }
});
</script>
