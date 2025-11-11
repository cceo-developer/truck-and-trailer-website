<template>
    <article class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
        <div class="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
            <slot name="icon">🔒</slot>
        </div>
        <h3 class="font-semibold text-slate-900">{{ title }}</h3>
        <p class="mt-1 text-slate-600 text-sm">
            <slot />
        </p>
    </article>
</template>

<script setup>
defineProps({
    title: { type: String, required: true }
})
</script>

<style scoped>

</style>