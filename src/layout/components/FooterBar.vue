<template>
    <footer class="bg-slate-800 text-slate-200">
        <div class="mx-auto max-w-7xl px-4 py-14">
            <!-- top row -->
            <div class="grid gap-10 md:grid-cols-12">
                <!-- Discover (3 columns de links) -->
                <section class="md:col-span-6">
                    <h3 class="text-2xl font-semibold">Discover</h3>
                    <div class="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <nav v-for="(col, idx) in discover" :key="idx" aria-label="Discover column">
                            <ul class="space-y-3 text-slate-300">
                                <li v-for="link in col" :key="link.label">
                                    <RouterLink
                                        v-if="link.to" :to="link.to"
                                        class="hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
                                        {{ link.label }}
                                    </RouterLink>
                                    <a
                                        v-else :href="link.href || '#'"
                                        class="hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
                                        {{ link.label }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>

                <!-- USA office -->
                <section class="md:col-span-4">
                    <h3 class="text-2xl font-semibold">USA office</h3>
                    <dl class="mt-6 space-y-4 text-slate-300">
                        <div>
                            <dt class="font-semibold text-slate-100">Location:</dt>
                            <dd class="mt-1">San Antonio, Texas, USA</dd>
                        </div>
                        <div>
                            <dt class="font-semibold text-slate-100">Phone:</dt>
                            <dd class="mt-1">
                                +31 85 964 47 25 &nbsp;&nbsp;&nbsp; +31 65 792 63 11
                            </dd>
                        </div>
                        <div>
                            <dt class="font-semibold text-slate-100">Email:</dt>
                            <dd class="mt-1">
                                <a href="mailto:info@transx.com" class="hover:text-white">info@transx.com</a>
                            </dd>
                        </div>
                        <div>
                            <dt class="font-semibold text-slate-100">Openning hours:</dt>
                            <dd class="mt-1">9:00 AM - 5:00 PM</dd>
                        </div>
                    </dl>
                </section>

                <!-- Logo + redes -->
                <aside class="md:col-span-2 flex md:block items-start md:items-end justify-between md:justify-start">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/truck/logo-blanco.png" alt="Truck logo" class="h-9 w-auto" />
                    </div>
                    <ul class="mt-6 flex gap-4 md:justify-start">
                        <li v-for="s in social" :key="s.label">
                            <a
                                :href="s.href" target="_blank" rel="noopener"
                                class="inline-flex size-9 items-center justify-center rounded-full border border-slate-600 hover:border-slate-400 hover:text-white"
                                :aria-label="s.label" title="">
                                <i :class="s.icon"></i>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>

            <!-- bottom row -->
            <div class="mt-12 border-t border-slate-700/70 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <nav aria-label="Legal links" class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                    <RouterLink to="/terms" class="hover:text-white">Terms and conditions</RouterLink>
                    <span class="hidden md:inline text-slate-600">|</span>
                    <RouterLink to="/privacy" class="hover:text-white">Privacy policy</RouterLink>
                    <span class="hidden md:inline text-slate-600">|</span>
                    <RouterLink to="/cookies" class="hover:text-white">Cookies</RouterLink>
                </nav>
                <div class="text-sm text-slate-400">
                    © {{ year }} Truck and Trailer. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

const year = new Date().getFullYear();

// 3 columnas tipo template

const discover = [
    [
        { label: 'About us', to: '/about' },
        { label: 'Team', to: '/team' },
        { label: 'Careers', to: '/careers' },
        { label: 'Services', to: '/services' },
    ],
    [
        { label: 'Pricing plan', to: '/pricing' },
        { label: 'Warehouse', to: '/warehouse' },
        { label: 'Calculator', to: '/calculator' },
        { label: 'Contact', to: '/contact' },
    ],
    [
        { label: 'Elements', to: '/elements' },
        { label: 'Contact', to: '/contact' },
        { label: 'Site map', to: '/sitemap' },
        { label: 'FAQ', to: '/faq' },
    ],
]

// redes (Font Awesome brands)
const social = [
    { label: 'YouTube', icon: 'fa-brands fa-youtube', href: '#' },
    { label: 'Facebook', icon: 'fa-brands fa-facebook-f', href: '#' },
    { label: 'Twitter', icon: 'fa-brands fa-x-twitter', href: '#' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', href: '#' },
    { label: 'Instagram', icon: 'fa-brands fa-instagram', href: '#' },
]
</script>

<style scoped>

</style>