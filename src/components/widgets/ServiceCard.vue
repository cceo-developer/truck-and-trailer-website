<template>
    <div class="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
        <div class="size-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-700">
            <i :class="icon" />
        </div>
        <h4 class="mt-4 text-lg font-semibold">{{ title }}</h4>
        <p class="mt-2 text-slate-600 text-sm">{{ desc }}</p>

        <RouterLink
            v-if="to" :to="to"
            class="mt-4 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800">
            Learn more
            <i class="fa-solid fa-arrow-right-long" />
        </RouterLink>
        <button v-else class="mt-4 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800">
            Learn more
            <i class="fa-solid fa-arrow-right-long" />
        </button>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { type: String, required: true },
    to: { type: [String, Object], default: null },
})
</script>

<style scoped>

</style>