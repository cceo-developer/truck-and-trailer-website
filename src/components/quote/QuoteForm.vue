<template>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 class="text-2xl font-semibold text-slate-800">Tell us about your fleet needs</h2>
        <p class="text-slate-500 mt-1">Fill out the form and we’ll prepare a tailored quote.</p>

        <form class="mt-6 space-y-6" @submit.prevent>
            <!-- Contacto -->
            <div>
                <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</h3>
                <div class="mt-3 grid md:grid-cols-2 gap-5">
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Full Name</label>
                        <input type="text" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Company</label>
                        <input type="text" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Acme Logistics" />
                    </div>
                </div>

                <div class="mt-3 grid md:grid-cols-2 gap-5">
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Email</label>
                        <input type="email" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="you@company.com" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Phone</label>
                        <input type="tel" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="(210) 555-1234" />
                    </div>
                </div>
            </div>

            <!-- Requerimiento -->
            <div>
                <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500">Requirements</h3>
                <div class="mt-3 grid md:grid-cols-3 gap-5">
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Type of Unit</label>
                        <select class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500">
                            <option value="">Select…</option>
                            <option value="trailer">Semi Trailer</option>
                            <option value="truck">Truck / Tractor</option>
                            <option value="box">Box Truck</option>
                            <option value="container">Container</option>
                            <option value="equipment">Equipment</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Units</label>
                        <input type="number" min="1" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="e.g. 12" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Term</label>
                        <select class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500">
                            <option value="">Select…</option>
                            <option value="short">Short-term</option>
                            <option value="long">Long-term</option>
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                </div>

                <div class="mt-3 grid md:grid-cols-2 gap-5">
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
                    <div>
                        <label class="block text-sm font-medium text-slate-700">Start Date (approx)</label>
                        <input type="date" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" />
                    </div>
                </div>

                <div class="mt-3">
                    <label class="block text-sm font-medium text-slate-700">Details</label>
                    <textarea rows="5" class="mt-1 w-full rounded-lg border-slate-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Tell us about your storage requirements (indoor/yard, maintenance, special access…)"></textarea>
                </div>
            </div>

            <!-- Legal / Acciones -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <label class="inline-flex items-start gap-3 text-sm text-slate-600">
                    <input type="checkbox" class="mt-1 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                    <span>I agree to the <RouterLink to="/terms" class="underline hover:text-slate-800">Terms</RouterLink> and <RouterLink to="/privacy" class="underline hover:text-slate-800">Privacy Policy</RouterLink>.</span>
                </label>

                <button
                    type="button" disabled title="UI only"
                    class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50">
                    <i class="fa-solid fa-file-circle-check"></i>
                    Request Quote
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>