<template>
    <div class="min-h-screen flex bg-zinc-100">
        <div class="flex w-full h-screen">
            <div class="lg:p-20 md:p-15 sm:p-10 flex flex-1 h-full" @submit.capture="interceptSubmit">
                <alv-form 
                    id="alv-login" ref="alvLogin" input-parent-selector=".form-error" :action="alvAction" class="flex flex-1 h-full"
                    @after-done="afterDone" @after-error="afterError">
                    <div class="grid grid-cols-5 w-full h-full shadow-2xl">
                        <div class="xl:block hidden col-span-3 overflow-hidden">
                            <div class="relative h-full">
                                <div class="absolute left-30 top-60">
                                    <img :src="logo" class="w-[20rem]" />
                                    <div class="text-5xl text-white font-semibold pt-30">Hello,</div>
                                    <div class="text-6xl text-white font-bold pt-3">Welcome back</div>
                                </div>
                                <img :src="background" class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div class="xl:col-span-2 col-span-5 bg-white 2xl:p-20 p-15">
                            <div class="text-orange-500 font-bold text-5xl tracking-tight">Sign in</div>
                            <div class="flex gap-x-2 pt-1">
                                <div>or</div>
                                <RouterLink 
                                    :to="{name: 'register'}" class="text-sky-600 hover:underline hover:text-sky-700">
                                    create a new account
                                </RouterLink>
                            </div>
                            <div class="pt-20">
                                <div class="space-y-4">
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <InputText id="email" v-model="item.email" name="email" fluid size="large" />
                                            <FormLabel for="email">
                                                <template #label>Email</template>
                                            </FormLabel>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <Password 
                                                id="password" v-model="item.password" name="password" :feedback="false" fluid size="large" 
                                                toggleMask />
                                            <FormLabel for="password">
                                                <template #label>Password</template>
                                            </FormLabel>
                                        </FloatLabel>
                                    </div>
                                    <div class="flex items-center justify-between pt-5">
                                        <div class="flex items-center gap-x-3">
                                            <Checkbox v-model="item.remember" binary />
                                            <FormLabel for="password">
                                                <template #label>
                                                    <div class="text-sm text-zinc-600">Remember me</div>
                                                </template>
                                            </FormLabel>
                                        </div>
                                        <RouterLink 
                                            :to="{name: 'forgot-password'}" class="text-sky-600 hover:underline hover:text-sky-700">
                                            forgot password?
                                        </RouterLink>
                                    </div>
                                </div>
                                <div class="form-error pt-10">
                                    <button 
                                        type="submit" class="w-full p-2 rounded-xl text-lg bg-orange-500 text-white font-bold"
                                        :disabled="loading" :class="{
                                            'cursor-pointer hover:bg-orange-600 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-400': !loading,
                                            'cursor-progress opacity-50': loading
                                        }">
                                        <div class="flex justify-center items-center gap-x-2">
                                            <i v-if="loading" class="fa-solid fa-spinner fa-spin-pulse text-xl" />
                                            <div>Sign in</div>
                                        </div>
                                    </button>
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
import {ref} from 'vue';
// ASSETS
import logo from '@/assets/truck/logo-blanco.png';
import background from '@/assets/images/wallpaper.png';
// SERVICES
import {createOauthToken} from '@/services/auth/oauth-services.js';

const defaultValues = () => ({
    email: null,
    password: null,
    remember: false
});

const item =  ref(Object.assign({}, defaultValues()));
    
const alvAction = () => createOauthToken(item.value);
const loading = ref(false);

const afterDone = (response) => {
    loading.value = false;
    localStorage.auth = btoa(JSON.stringify(response.data));
    window.location = '/'
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
</script>