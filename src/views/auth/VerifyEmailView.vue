<template>
    <div class="min-h-screen flex bg-zinc-100">
        <div class="flex w-full h-screen">
            <div class="lg:p-20 md:p-15 sm:p-10 flex flex-1 h-full" @submit.capture="interceptSubmit">
                <div class="flex flex-1 h-full">
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
                            <div class="text-orange-500 font-bold text-5xl tracking-tight">Account verification</div>
                            <div class="pt-20">
                                <div class="space-y-4">
                                    <div v-if="loading" class="flex items-center gap-x-2 text-zinc-600">
                                        <i class="fa-solid fa-spinner fa-spin-pulse text-2xl" />
                                        <div class="text-xl">Validating account...</div>
                                    </div>
                                    <div v-else-if="!someError">
                                        <div class="text-2xl">
                                            Welcome,
                                        </div>
                                        <div class="text-3xl pt-5">
                                            {{ user }}
                                        </div>
                                        <div class="text-lg pt-10">
                                            <i class="pi pi-check-circle text-emerald-500 pr-1" style="font-size: 1.2rem;" />
                                            Your account has been successfully verified, welcome to Truck & Trailer Storage!
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
                                    </div>
                                    <div v-else class="text-xl text-red-500 font-semibold">
                                        Something went wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// IMPORTS
import {nextTick, onMounted, ref} from 'vue';
// ASSETS
import logo from '@/assets/truck/logo-blanco.png';
import background from '@/assets/images/wallpaper.png';
// SERVICES
import {oauthVerifyEmail} from '@/services/auth/oauth-services.js';

const loading = ref(false);
const someError = ref(false);
const user = ref(null);

onMounted(() => {
    someError.value = false;
    loading.value = true;
    oauthVerifyEmail(window.location.search).then((response) => {
        user.value = response.data.user_name;
    })
    .catch((error) => {
        console.error(error);
        someError.value = true;
        user.value = null;
    })
    .finally(() => {
        nextTick(() => {
            loading.value = false;
        });
    });
});
</script>