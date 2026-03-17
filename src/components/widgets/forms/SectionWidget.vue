<template>
    <div class="border-b border-zinc-500 pb-1">
        <div class="flex items-center gap-x-3">
            <div class="flex items-center gap-x-1.5">
                <div class="font-semibold text-zinc-900 text-md tracking-tight">{{ props.title }}</div>
                <div v-if="props.subtitle" class="text-zinc-500 tracking-wide text-sm mt-0.5">
                    <div class="flex items-center gap-x-1.5">
                        <div>({{ props.subtitle }})</div>
                    </div>
                </div>
            </div>
        </div>	
    </div>	
</template>

<script setup>
const props = defineProps({
    title: {type: String, default: () => null},
    subtitle: {type: String, default: () => null},
});
</script>