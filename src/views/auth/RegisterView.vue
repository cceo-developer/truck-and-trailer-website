<template>
    <div class="min-h-screen flex">
        <div @submit.capture="interceptSubmit" class="flex flex-1">
            <alv-form
                id="alv-register" input-parent-selector=".form-error" :action="alvAction" class="flex flex-1"
                @after-done="afterDone" @after-error="afterError">
                <div class="grid grid-cols-5 w-full">
                    <div class="col-span-3">
                        <div class="flex h-full justify-center pt-60 bg-zinc-50"> 
                            <div class="text-center">
                                <div class="flex justify-center items-center w-[40rem]">
                                    <img :src="logo" alt="Truck & Trailer Storage logo" class="object-cover p-10" />
                                </div>
                                <div class="text-3xl font-bold">Hello, welcome back!</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 bg-white">
                        <div class="p-10">
                            <div class="pt-20 font-bold text-3xl">
                                Register
                            </div>
                            <div class="pt-20">
                                <div class="space-y-3">
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <InputText id="email" v-model="item.email" name="email" fluid size="large" />
                                            <label for="email">Email</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="flex items-center gap-x-3">
                                        <div class="bg-zinc-100 w-full h-[0.2rem]" />
                                        <div>or</div>
                                        <div class="bg-zinc-100 w-full h-[0.2rem]" />
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <InputText id="formatted_phone" v-model="item.formatted_phone" name="formatted_phone" fluid size="large" />
                                            <label for="formatted_phone">Phone</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error pt-8">
                                        <FloatLabel variant="on">
                                            <InputText id="name" v-model="item.name" name="name" fluid size="large" />
                                            <label for="name">Full name</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <InputText id="address" v-model="item.address" name="address" fluid size="large" />
                                            <label for="address">Address</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <InputText id="dot" v-model="item.dot" name="dot" fluid size="large" />
                                            <label for="dot">Dot number</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <InputText id="company_name" v-model="item.company_name" name="company_name" fluid size="large" />
                                            <label for="company_name">Company</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <Password 
                                                id="password" v-model="item.password" name="password" :feedback="false" fluid size="large" 
                                                toggleMask />
                                            <label for="password">Password</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="form-error">
                                        <FloatLabel variant="on">
                                            <Password 
                                                id="password_confirmation" v-model="item.password_confirmation" name="password_confirmation" :feedback="false" fluid size="large" />
                                            <label for="password_confirmation">Password confirmation</label>
                                        </FloatLabel>
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
                </div>
            </alv-form>
        </div>
    </div>
</template>

<script setup>
// IMPORTS
import {ref} from 'vue';
// ASSETS
import logo from '@/assets/truck/logo_full.png';
// SERVICES
import {register} from '@/services/auth/oauth-services.js';

const defaultValues = () => ({
    email: null,
    formatted_phone: null,
    name: null,
    address: null,
    dot: null,
    company_name: null,
    password: null,
    password_confirmation: null
});

const item =  ref(Object.assign({}, defaultValues()));
    
const alvAction = () => register(item.value);
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