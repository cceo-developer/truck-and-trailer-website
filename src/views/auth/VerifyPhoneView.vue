<template>
    <div class="min-h-screen flex bg-zinc-100">
        <div class="flex w-full h-screen">
            <div class="lg:p-20 md:p-15 sm:p-10 flex flex-1 h-full" @submit.capture="interceptSubmit">
                <alv-form 
                    id="alv-register" input-parent-selector=".form-error" :action="alvAction" class="flex flex-1 h-full"
                    @after-done="afterDone" @after-error="afterError">
                    <div class="grid grid-cols-5 w-full h-full shadow-2xl">
                        <div class="xl:block hidden col-span-3 overflow-hidden">
                            <div class="relative h-full">
                                <div class="absolute left-30 top-60">
                                    <img :src="logo" class="w-[20rem]" />
                                    <div class="text-5xl text-white font-semibold pt-30">Hello,</div>
                                    <div class="text-6xl text-white font-bold pt-3">Welcome back!</div>
                                </div>
                                <img :src="background" class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div class="xl:col-span-2 col-span-5 bg-white 2xl:p-20 p-15">
                            <div class="text-orange-500 font-bold text-5xl tracking-tight">Phone number verification</div>
                            <div class="pt-20">
                                <div class="space-y-4">
                                    <template v-if="!verified">
                                        <div class="text-lg">
                                            We’ve sent a verification code to your phone number.
                                        </div>
                                        <div class="flex flex-col items-center pt-10">
                                            <div class="pb-3">Enter the code:</div>
                                            <InputOtp v-model="item.code" :length="6" size="large" />
                                        </div>
                                        <button 
                                            type="button" class="px-5 p-2 rounded-xl text-md bg-zinc-100 text-zinc-700 font-bold mt-5"
                                            :disabled="disabledResend" :class="{
                                                'cursor-pointer hover:bg-zinc-200 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-zinc-200': !disabledResend,
                                                'cursor-progress opacity-50': disabledResend
                                            }" @click="handleResendCode">
                                            <div class="flex justify-center items-center gap-x-2">
                                                <i v-if="loadingResend" class="fa-solid fa-spinner fa-spin-pulse text-xl" />
                                                <div>Resend code {{ timeToResend > 0 ? `(wait ${timeToResend} s)` : '' }}</div>
                                            </div>
                                        </button>
                                        <div class="form-error pt-10">
                                            <button 
                                                type="submit" class="w-full p-2 rounded-xl text-lg bg-orange-500 text-white font-bold"
                                                :disabled="loading" :class="{
                                                    'cursor-pointer hover:bg-orange-600 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-400': !loading,
                                                    'cursor-progress opacity-50': loading
                                                }">
                                                <div class="flex justify-center items-center gap-x-2">
                                                    <i v-if="loading" class="fa-solid fa-spinner fa-spin-pulse text-xl" />
                                                    <div>Verify code</div>
                                                </div>
                                            </button>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="text-lg pt-10">
                                            <i class="pi pi-check-circle text-emerald-500 pr-1" style="font-size: 1.2rem;" />
                                            Your phone number has been successfully verified.
                                        </div>
                                        <div class="flex justify-end pt-10">
                                            <button 
                                                type="button" class="text-sky-600 hover:underline hover:text-sky-700"
                                                @click="handleFinish">
                                                <div class="flex items-center gap-x-2">
                                                    <i class="fa-solid fa-arrow-right-long" />
                                                    <div>go home</div>
                                                </div>
                                            </button>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </alv-form>
            </div>
        </div>
    </div>
</template>

<script setup>
// IMPORTS
import {computed, onMounted, ref} from 'vue';
// ASSETS
import logo from '@/assets/truck/logo-blanco.png';
import background from '@/assets/images/wallpaper.png';
// COMPOSABLES
import {useAuth} from '@/composables/auth.js';
// SERVICES
import {sendVerifyPhone, verifyPhone} from '@/services/auth/oauth-services.js';

const auth = useAuth();

const defaultValues = () => ({
    code: null
});

const item =  ref(Object.assign({}, defaultValues()));

const loading = ref(false);
const loadingResend = ref(false);

const timeToResend = ref(0);
const verified = ref(false);

onMounted(() => {
    item.value = Object.assign({}, defaultValues());
});

const alvAction = () => verifyPhone(auth.user.id, item.value);

const afterDone = (response) => {
    loading.value = false;
    verified.value = true;
    
    localStorage.auth = btoa(JSON.stringify({
        user: {
            ...response,
            permissions: auth.user.permissions 
        },
        access_token: auth.access_token
    }));
}

const afterError = (response) => {
    loading.value = false;
    console.error(response);
}

const interceptSubmit = (e) => {
    if (loading.value) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
    }
    loading.value = true;
};

const handleResendCode = () => {
    loadingResend.value = true;
    sendVerifyPhone(auth.user.id).then(() => {

    }).finally(() => {
        loadingResend.value = false;

        timeToResend.value = 30;
        const interval = setInterval(() => {
            timeToResend.value--;
    
            if (timeToResend.value <= 0) {
                clearInterval(interval);
            }
        }, 1000);
    });
}

const disabledResend = computed(() => {
    return loadingResend.value || timeToResend.value > 0;
});

const handleFinish = () => {
    window.location = '/';
}
</script>