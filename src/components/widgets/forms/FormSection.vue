<template>
    <div class="space-y-5">
        <SectionWidget v-if="props.showTitle && (props.title || props.subtitle)" :title="props.title" :subtitle="props.subtitle" />	
        <div 
            class="w-full grid grid-cols-1 gap-x-3 gap-y-4"
            :class="{
                'md:grid-cols-2' : props.cols == 2, 'md:grid-cols-3' : props.cols == 3, 'md:grid-cols-4' : props.cols == 4,
                'md:grid-cols-5' : props.cols == 5, 'md:grid-cols-6' : props.cols == 6, 'md:grid-cols-7' : props.cols == 7,
                'md:grid-cols-8' : props.cols == 8, 'md:grid-cols-9' : props.cols == 9, 'md:grid-cols-10' : props.cols == 10,
            }">
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cols: {type: Number, default: () => 1},
    title: {type: String, default: () => null},
    subtitle: {type: String, default: () => null},
    showTitle: {type: Boolean, default: () => true},
});
</script>