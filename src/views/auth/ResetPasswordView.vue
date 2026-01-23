<template>
    <div class="min-h-screen flex bg-white">
        <div class="flex w-full h-screen">
            <div class="lg:p-18 md:p-15 sm:p-10 flex flex-1 h-full" @submit.capture="interceptSubmit">
                <alv-form 
                    id="alv-register" input-parent-selector=".form-error" :action="alvAction" class="flex flex-1 h-full"
                    @after-done="afterDone" @after-error="afterError">
                    <div class="flex justify-center w-full">
                        <div class="w-[30rem] flex flex-col items-center">
                            <img :src="logo" class="w-[20rem] self-center" />
                            <div class="h-[0.2rem] bg-zinc-100 w-full rounded-full mt-10" />
                            <div class="text-3xl font-semibold pt-10">
                                Reset password
                            </div>
                            <div class="pt-10 text-zinc-700 self-start">
                                Enter a new password
                            </div>
                            <div class="pt-2 text-zinc-600">
                                The password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number.
                            </div>
                            <div class="w-full pt-10 space-y-4">
                                <div class="form-error">
                                    <FloatLabel variant="on">
                                        <Password 
                                            id="password" v-model="item.password" name="password" :feedback="false" fluid size="large" 
                                            toggleMask />
                                        <FormLabel for="password" label="Password" required />
                                    </FloatLabel>
                                </div>
                                <div class="form-error">
                                    <FloatLabel variant="on">
                                        <Password 
                                            id="password_confirmation" v-model="item.password_confirmation" name="password_confirmation" :feedback="false" fluid size="large"  />
                                        <FormLabel for="password_confirmation" label="Password confirmation" required />
                                    </FloatLabel>
                                </div>
                            </div>
                            <div class="form-error pt-10 w-full">
                                <button 
                                    type="submit" class="w-full p-2 rounded-xl text-lg bg-orange-500 text-white font-bold"
                                    :disabled="loading" :class="{
                                        'cursor-pointer hover:bg-orange-600 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-400': !loading,
                                        'cursor-progress opacity-50': loading
                                    }">
                                    <div class="flex justify-center items-center gap-x-2">
                                        <i v-if="loading" class="fa-solid fa-spinner fa-spin-pulse text-xl" />
                                        <div>Reset password</div>
                                    </div>
                                </button>
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
import {onMounted, ref} from 'vue';
// ASSETS
import logo from '@/assets/truck/logo_full.png';
// SERVICES
import {oauthResetPassword} from '@/services/auth/oauth-services.js';

const defaultValues = () => ({
    password: null,
    password_confirmation: null,
});

const item =  ref(Object.assign({}, defaultValues()));
    
const alvAction = () => oauthResetPassword(window.location.search, item.value);
const loading = ref(false);

const afterDone = () => {
    loading.value = false;
    window.location = '/login';
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

onMounted(() => item.value = Object.assign({}, defaultValues()));
</script>