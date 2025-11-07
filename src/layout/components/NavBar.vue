<template>
    <nav class="mx-auto max-w-7xl px-4 py-3">
         <div class="flex items-center justify-between">
             <RouterLink to="/" class="flex items-center gap-3">
                 <img :src="logo" alt="Logo" class="h-8 w-auto" />
                 <span class="sr-only">TransX</span>
             </RouterLink>
             <button class="md:hidden p-2" aria-label="Open menu" @click="open = !open">
                 <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
             </button>
             <ul class="hidden md:flex items-center gap-6">
                 <li><RouterLink to="/" class="hover:text-gray-900">Home</RouterLink></li>
                 <li><a href="#" class="hover:text-gray-900">Services</a></li>
                 <li><a href="#" class="hover:text-gray-900">Pages</a></li>
                 <li><a href="#" class="hover:text-gray-900">Blog</a></li>
                 <li><a href="#" class="hover:text-gray-900">Shop</a></li>
                 <li><a href="#" class="hover:text-gray-900">Contacts</a></li>
             </ul>
             <transition name="fade">
                 <ul v-if="open" class="mt-3 flex flex-col gap-3 md:hidden">
                     <li><RouterLink to="/" @click="open=false">Home</RouterLink></li>
                     <li><a href="#" @click="open=false">Services</a></li>
                     <li><a href="#" @click="open=false">Pages</a></li>
                     <li><a href="#" @click="open=false">Blog</a></li>
                     <li><a href="#" @click="open=false">Shop</a></li>
                     <li><a href="#" @click="open=false">Contacts</a></li>
                 </ul>
             </transition>
         </div>
    </nav>
</template>

<script setup>

import logo from '@/assets/logo_black.png'
import {ref} from "vue";

const open = ref(false);

</script>

<style scoped>
.fade-enter-active .fade-leave-active {
    transition: opacity .2s;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>