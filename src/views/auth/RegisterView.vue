<template>
    <div class="min-h-screen flex bg-zinc-100">
        <div class="flex w-full h-screen">
            <div class="lg:p-18 md:p-15 sm:p-10 flex flex-1 h-full" @submit.capture="interceptSubmit">
                <alv-form 
                    id="alv-register" input-parent-selector=".form-error" :action="alvAction" class="flex flex-1 h-full"
                    @after-done="afterDone" @after-error="afterError">
                    <div class="grid grid-cols-5 w-full h-full shadow-2xl">
                        <div class="xl:block hidden col-span-3 overflow-hidden">
                            <div class="relative h-full">
                                <div class="absolute left-30 top-60">
                                    <img :src="logo" class="w-[20rem]" />
                                    <div class="text-5xl text-white font-semibold pt-30">Hello,</div>
                                    <div class="text-6xl text-white font-bold pt-3">Welcome!</div>
                                </div>
                                <img :src="background" class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div class="xl:col-span-2 col-span-5 bg-white 2xl:p-20 p-15">
                            <div class="text-orange-500 font-bold text-5xl tracking-tight">Register</div>
                            <div v-if="!registered" class="flex gap-x-2 pt-1">
                                <div>already have an account?</div>
                                <RouterLink 
                                    :to="{name: 'login'}" class="text-sky-600 hover:underline hover:text-sky-700">
                                    Sign in
                                </RouterLink>
                            </div>
                            <div class="pt-10">
                                <template v-if="!registered">
                                    <div class="space-y-3">
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <InputText id="email" v-model="item.email" name="email" fluid />
                                                <FormLabel for="email" label="Email" :required="formattedItem.formatted_phone === null" />
                                            </FloatLabel>
                                        </div>
                                        <div class="flex items-center gap-x-3">
                                            <div class="bg-zinc-200 rounded-full w-full h-[0.1rem]" />
                                            <div>or</div>
                                            <div class="bg-zinc-200 rounded-full w-full h-[0.1rem]" />
                                        </div>
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <PhoneField id="formatted_phone" v-model="item.formatted_phone" name="formatted_phone"  />
                                                <FormLabel for="formatted_phone" label="Phone" :required="formattedItem.email === null" />
                                            </FloatLabel>
                                        </div>
                                        <div class="form-error pt-8">
                                            <FloatLabel variant="on">
                                                <InputText id="name" v-model="item.name" name="name" fluid />
                                                <FormLabel for="name" label="Full name" required />
                                            </FloatLabel>
                                        </div>
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <InputText id="address" v-model="item.address" name="address" fluid />
                                                <FormLabel for="address" label="Address" />
                                            </FloatLabel>
                                        </div>
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <InputText id="dot" v-model="item.dot" name="dot" fluid />
                                                <FormLabel for="dot" label="Dot number" />
                                            </FloatLabel>
                                        </div>
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <InputText id="company_name" v-model="item.company_name" name="company_name" fluid />
                                                <FormLabel for="company_name" label="Company" />
                                            </FloatLabel>
                                        </div>
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <Password 
                                                    id="password" v-model="item.password" name="password" :feedback="false" fluid 
                                                    toggleMask />
                                                <FormLabel for="password" label="Password" required />
                                            </FloatLabel>
                                        </div>
                                        <div class="form-error">
                                            <FloatLabel variant="on">
                                                <Password 
                                                    id="password_confirmation" v-model="item.password_confirmation" name="password_confirmation" :feedback="false" fluid />
                                                <FormLabel for="password_confirmation" label="Password confirmation" required />
                                            </FloatLabel>
                                        </div>
                                    </div>
                                    <div class="form-error pt-6">
                                        <button 
                                            type="submit" class="w-full p-2 rounded-xl text-lg bg-orange-500 text-white font-bold"
                                            :disabled="loading" :class="{
                                                'cursor-pointer hover:bg-orange-600 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-400': !loading,
                                                'cursor-progress opacity-50': loading
                                            }">
                                            <div class="flex justify-center items-center gap-x-2">
                                                <i v-if="loading" class="fa-solid fa-spinner fa-spin-pulse text-xl" />
                                                <div>Register</div>
                                            </div>
                                        </button>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="flex items-center gap-x-3">
                                        <i class="pi pi-check-circle text-emerald-500" style="font-size: 2rem;" />
                                        <div class="font-bold text-3xl">
                                            Hi {{ item.name }}!
                                        </div>
                                    </div>
                                    <div class="pt-10 text-lg">
                                        Your account has been successfully registered.
                                    </div>
                                    <div class="pt-5 text-zinc-600 text-lg">
                                        Please check your email to confirm your account, or log in to verify your phone number.
                                    </div>
                                    <div class="flex justify-end pt-10">
                                        <RouterLink 
                                            :to="{name: 'login'}" class="text-sky-600 hover:underline hover:text-sky-700">
                                            <div class="flex items-center gap-x-2">
                                                <i class="fa-solid fa-arrow-right-long" />
                                                <div>sign in</div>
                                            </div>
                                        </RouterLink>
                                    </div>
                                </template>
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
// SERVICES
import {register} from '@/services/auth/oauth-services.js';
// COMPONENTS
import PhoneField from '@/components/widgets/fields/PhoneField.vue';

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

const registered = ref(false);

const formattedItem = computed(() => {
    const email = item.value.email ? item.value.email.trim() : null;
    const formatted_phone = item.value.formatted_phone ? item.value.formatted_phone.trim() : null;
    return {
        ...item.value,
        email: email && email !== '' ? email : null,
        formatted_phone: formatted_phone && formatted_phone !== '' && formatted_phone.includes('(') ? formatted_phone : null,
    }
});
    
const alvAction = () => register(formattedItem.value);
const loading = ref(false);

const afterDone = () => {
    loading.value = false;
    registered.value = true;
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

onMounted(() => registered.value = false);
</script>