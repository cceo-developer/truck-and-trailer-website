<template>
    <PVDialog
        v-model:visible="display" modal :closeOnEscape="false" :draggable="true" :header="props.header" 
        :style="{ width: props.modalWidth }" :breakpoints="{ '960px': '75vw', '641px': '90vw' }">
        <template #header>
            <slot name="header" />
        </template>
        <slot /> 
        <template #footer>
            <div class="flex items-center gap-x-3 pt-3">
                <slot name="footer-left" />
                <PrimaryButton v-if="!props.readonly" :loading="loading" @click="sendForm()">
                    <div class="flex items-center gap-x-2">
                        <i :class="`pi ${props.buttonIcon}`" />
                        <div>{{ props.buttonLabel }}</div>
                    </div>
                </PrimaryButton>
            </div>	
        </template>
    </PVDialog>
</template>

<script setup>
// IMPORTS
import {nextTick, ref} from "vue";

const props = defineProps({
    alv: {type: [Object, null], required: true},
    header: {type: [String, null], required: true},
    readonly: {type: Boolean, default: () => false},
    modalWidth: {type: String, default: () => '60vw'},
    buttonLabel: {type: String, default: () => 'Save'},
    buttonIcon: {type: String, default: () => 'pi-bookmark'},
});

const display = ref(false);
const loading = ref(false);

const show = () => display.value = true;
const hide = () => display.value = false;
const setLoading = (value = false) => loading.value = value;

const sendForm = () => {
    setLoading(true);
    nextTick(() => (props.alv.sendFormData()));
};

defineExpose({show, hide, setLoading})
</script>