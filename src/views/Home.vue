<template>
    <div>
        <!-- Sección: Slider principal -->
        <section class="relative">
            <div class="w-full">
                <Swiper
                    :modules="modules"
                    :loop="true"
                    :autoplay="{ delay: 4500, disableOnInteraction: false }"
                    :pagination="{ clickable: true }"
                    :navigation="true"
                    class="h-[70vh]"
                >
                    <SwiperSlide v-for="(slide, i) in slides" :key="i">
                        <div class="relative h-full">
                            <img
                                :src="slide.src"
                                :alt="slide.alt"
                                class="absolute inset-0 w-full h-full object-cover"
                                :class="slide.pos || 'object-center'"
                            />
                            <div class="absolute inset-0 bg-black/40"></div>
                            <div class="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                                <div class="text-white max-w-2xl">
                                    <span class="block text-sm tracking-widest uppercase opacity-90">TTS</span>
                                    <h2 class="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                        {{ slide.title }}
                                    </h2>
                                    <p class="mt-4 text-base md:text-lg opacity-90">
                                        {{ slide.subtitle }}
                                    </p>
                                    <div class="mt-6 flex gap-3">
                                        <RouterLink to="/quote" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium">
                                            Get a Quote
                                            <i class="fa-solid fa-arrow-right-long"></i>
                                        </RouterLink>
                                        <a
                                            href="#services"
                                            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium"
                                        >
                                            Our Services
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <!-- Sección: Services -->
        <section id="services" class="py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex items-end justify-between gap-6">
                    <div>
                        <span class="block text-sm tracking-widest uppercase text-primary-500">Services</span>
                        <h3 class="text-2xl md:text-3xl font-bold">Premium Fleet Storage & Support</h3>
                        <p class="mt-2 text-slate-600 max-w-2xl">
                            We securely store, support, and protect medium-to-heavy duty equipment with flexible short & long-term options.
                        </p>
                    </div>
                    <RouterLink to="/services" class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-500 hover:bg-primary-50">
                        All services
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </RouterLink>
                </div>

                <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceCard
                        v-for="svc in services"
                        :key="svc.title"
                        :title="svc.title"
                        :desc="svc.desc"
                        :icon="svc.icon"
                    />
                </div>
            </div>
        </section>

        <WhyChooseTTS />

        <!-- CTA sencilla -->
        <section class="py-16 md:py-24 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold">Secure, flexible storage that scales with your fleet</h3>
                    <p class="mt-3 text-slate-600">
                        24/7 surveillance and gated access, dedicated parking (no stacking delays), and optional maintenance to keep your assets ready.
                    </p>
                </div>
                <div class="md:text-right">
                    <RouterLink
                        to="/contact"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium">
                        Contact us
                        <i class="fa-solid fa-paper-plane"></i>
                    </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import {Swiper, SwiperSlide} from "swiper/vue";
import { Navigation, Pagination, Autoplay} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import b3a from '@/assets/truck/locations/zarzamora-bldg3b.jpg'
import b4  from '@/assets/truck/locations/zarzamora-bldg4.png'
import b5  from '@/assets/truck/locations/zarzamora-bldg5.png'


import ServiceCard from "@/components/widgets/ServiceCard.vue";
import WhyChooseTTS from "@/components/home/WhyChooseTTS.vue";

const modules = [Navigation, Pagination, Autoplay]


const slides = [
    {
        src: b5,
        alt: 'Warehouse 6,000 ft² – BLDG-5',
        title: 'Premium Truck & Trailer Storage in San Antonio, TX',
        subtitle: '4 terminals · 24/7 secured access · client-centric service',
        pos: 'object-center',
    },
    {
        src: b4,
        alt: 'Open Shop 1,250 ft² + yard – BLDG-4',
        title: 'Secure, Hassle-Free Access for Your Fleet',
        subtitle: 'Gated access, surveillance, and dedicated parking. Peace of mind.',
        pos: 'object-center',
    },
    {
        src: b3a,
        alt: 'Suite A Offices – BLDG-3',
        title: 'Tailored Solutions for Transporters of All Sizes',
        subtitle: 'Short & long-term storage, private yards, office/warehouse options.',
        pos: 'object-center',
    },
]

const services = [
    { title: 'Fleet Storage Solutions', desc: 'Short & long-term...', icon: 'fa-solid fa-truck',        to: '/services/fleet-storage' },
    { title: 'Private Yard Storage',    desc: 'Dedicated yard...',   icon: 'fa-solid fa-warehouse',    to: '/services/private-yard' },
    { title: 'Office & Warehouse',      desc: 'Flexible office...',  icon: 'fa-solid fa-building',     to: '/services/office-space' },
    { title: 'Vehicle Maintenance',     desc: 'Regular checks...',   icon: 'fa-solid fa-wrench',       to: '/services/maintenance' },
    { title: '24/7 Secured Access',     desc: 'Gated access...',     icon: 'fa-solid fa-shield-halved',to: '/why-choose-us' },
    { title: 'Dedicated Account Manager', desc: 'One point...',      icon: 'fa-solid fa-user-tie',     to: '/why-choose-us' },
]
</script>

<style scoped>

</style>