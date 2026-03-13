<template>
    <div class="flex items-center gap-x-2">
        <FloatLabel variant="on">
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText 
                    id="search" v-model="search" name="search" fluid style="border-radius: 30px; width: 35rem;"
                    @update:model-value="$value => handleGlobalFilter($value)" />
                <InputIcon v-if="props.loading" class="pi pi-spin pi-spinner" />
                <InputIcon v-else-if="search !== null">
                    <button 
                        type="button" v-tooltip.right="{value: 'Reset filters', pt: {text: {class: '!bg-zinc-950 !font-semibold !text-sm !min-w-max'}}}"
                        class="text-zinc-400 hover:text-zinc-700" @click="emit('reset')">
                        <i class="fa-solid fa-xmark" style="font-size: 1rem;" />
                    </button>
                </InputIcon>
            </IconField>
            <FormLabel for="search" label="Search" />
        </FloatLabel>
    </div>
</template>

<script setup>
import {debounce} from 'lodash';

const search = defineModel({type: String, default: null});

const props = defineProps({
    loading: {type: Boolean, default: false},
});    

const emit = defineEmits(['search', 'reset']);

const handleGlobalFilter = debounce(async (filter) => {
    let _filter = filter?.trim();
    if(_filter === '' || _filter === null) {
        search.value = null;
    }
    emit('search', _filter);
}, 900);

</script>