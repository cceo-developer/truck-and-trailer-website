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
                            <img :src="slide.src" :alt="slide.alt" class="absolute inset-0 w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black/40"></div>
                            <div class="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                                <div class="text-white max-w-2xl">
                                    <span class="block text-sm tracking-widest uppercase opacity-90">TransX</span>
                                    <h2 class="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                        {{ slide.title }}
                                    </h2>
                                    <p class="mt-4 text-base md:text-lg opacity-90">
                                        {{ slide.subtitle }}
                                    </p>
                                    <div class="mt-6 flex gap-3">
                                        <RouterLink
                                            to="/"
                                            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                                        >
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
                        <span class="block text-sm tracking-widest uppercase text-emerald-600">Services</span>
                        <h3 class="text-2xl md:text-3xl font-bold">Transporterium Services</h3>
                        <p class="mt-2 text-slate-600 max-w-2xl">
                            Replicamos la sección de “Services” con tarjetas Tailwind. Después afinamos contenido, íconos e imágenes.
                        </p>
                    </div>
                    <a href="#" class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-600 hover:bg-emerald-50">
                        All services
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
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

        <!-- CTA sencilla -->
        <section class="py-16 md:py-24 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold">Worldwide transportation services</h3>
                    <p class="mt-3 text-slate-600">Texto placeholder. Luego lo reemplazamos por el copy del template.</p>
                </div>
                <div class="flex md:justify-end">
                    <a href="#" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                        Contact us
                        <i class="fa-solid fa-paper-plane"></i>
                    </a>
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

import promo1 from '@/assets/promo_1.jpg'
import promo2 from '@/assets/promo_2.jpg'
import promo3 from '@/assets/promo_3.jpg'
import ServiceCard from "@/components/widgets/ServiceCard.vue";

const modules = [Navigation, Pagination, Autoplay]


const slides = [
    { src: promo1, alt: 'Promo 1', title: 'Transportation Services around the World', subtitle: 'Subtítulo editable inspirado en el template.' },
    { src: promo2, alt: 'Promo 2', title: 'Fast and Reliable Logistics', subtitle: 'Otro subtítulo de ejemplo.' },
    { src: promo3, alt: 'Promo 3', title: 'Your Cargo, Our Care', subtitle: 'Texto breve para el slide.' },
]

const services = [
    { title: 'Road Freight', desc: 'Descripción breve del servicio.', icon: 'fa-solid fa-truck' },
    { title: 'Air Freight', desc: 'Descripción breve del servicio.', icon: 'fa-solid fa-plane' },
    { title: 'Sea Freight', desc: 'Descripción breve del servicio.', icon: 'fa-solid fa-ship' },
    { title: 'Warehousing', desc: 'Descripción breve del servicio.', icon: 'fa-solid fa-warehouse' },
    { title: 'Project Cargo', desc: 'Descripción breve del servicio.', icon: 'fa-solid fa-boxes-stacked' },
    { title: 'Customs Brokerage', desc: 'Descripción breve del servicio.', icon: 'fa-solid fa-file-invoice' },
]

</script>

<style scoped>

</style>