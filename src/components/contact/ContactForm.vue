<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 class="text-2xl font-semibold text-slate-800">Send us a message</h2>
        <p class="text-slate-500 mt-1">We’ll get back to you as soon as possible.</p>

        <!-- Solo vista: no submit real -->
        <form class="mt-6 space-y-5" @submit.prevent>
            <div class="grid md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Jane Doe" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-700">Company</label>
                    <input type="text" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Acme Logistics" />
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="you@company.com" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-700">Phone</label>
                    <input type="tel" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="(210) 555-1234" />
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-sm font-medium text-slate-700">Subject</label>
                    <input type="text" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="General inquiry" />
                </div>

                <!-- Opcional: selección de terminal -->
                <div>
                    <label class="block text-sm font-medium text-slate-700">Preferred Terminal</label>
                    <select class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500">
                        <option value="">Any</option>
                        <option value="t1">Randolph Blvd (5169)</option>
                        <option value="t2">Sherri Ann Rd (5126)</option>
                        <option value="t3">Zarzamora St (12815)</option>
                        <option value="t4">Randolph Blvd (5246)</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="5" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Tell us about your storage needs…"></textarea>
            </div>

            <div class="flex items-center justify-between pt-2">
                <!-- Hint visual de validación (solo UI) -->
                <p class="text-sm text-slate-500">All fields marked may be required.</p>

                <button
                    type="button" disabled
                    title="UI only"
                    class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50">
                    <i class="fa-solid fa-paper-plane"></i>
                    Send
                </button>
            </div>
        </form>
    </div>
</template>


<script setup>

</script>

<style scoped>

</style>