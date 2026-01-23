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
                                Forgot your password?
                            </div>
                            <template v-if="!sent">
                                <div class="pt-10 text-zinc-500 text-center">
                                    Enter your email address below and we'll send your password reset instructions by email.
                                </div>
                                <div class="w-full pt-10">
                                    <FloatLabel variant="on">
                                        <InputText id="email" v-model="item.email" name="email" fluid size="large" />
                                        <FormLabel for="email">
                                            <template #label>Email</template>
                                        </FormLabel>
                                    </FloatLabel>
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
                                            <div>Forgot password</div>
                                        </div>
                                    </button>
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-xl text-center pt-10">
                                    We’ve sent you an email with instructions to reset your password.
                                </div>
                                <div class="flex justify-end pt-10">
                                    <RouterLink 
                                        :to="{name: 'home'}" class="text-sky-600 hover:underline hover:text-sky-700">
                                        <div class="flex items-center gap-x-2">
                                            <i class="fa-solid fa-arrow-right-long" />
                                            <div>go home</div>
                                        </div>
                                    </RouterLink>
                                </div>
                            </template>
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
import logo from '@/assets/truck/logo_full.png';
// SERVICES
import {oauthSendForgotPasswordEmail} from '@/services/auth/oauth-services.js';
// COMPONENTS

const defaultValues = () => ({
    email: null,
});

const item =  ref(Object.assign({}, defaultValues()));

const sent = ref(false);

const formattedItem = computed(() => {
    const email = item.value.email ? item.value.email.trim() : null;
    const formatted_phone = item.value.formatted_phone ? item.value.formatted_phone.trim() : null;
    return {
        ...item.value,
        email: email && email !== '' ? email : null,
        formatted_phone: formatted_phone && formatted_phone !== '' && formatted_phone.includes('(') ? formatted_phone : null,
    }
});
    
const alvAction = () => oauthSendForgotPasswordEmail(formattedItem.value);
const loading = ref(false);

const afterDone = () => {
    loading.value = false;
    sent.value = true;
}

const afterError = (response) => {
    loading.value = false;
    sent.value = true;
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

onMounted(() => sent.value = false);
</script>