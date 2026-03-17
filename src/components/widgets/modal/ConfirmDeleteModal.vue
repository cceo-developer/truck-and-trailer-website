<template>
    <div>
        <PVDialog
            v-model:visible="display" :modal="true" :closeOnEscape="false" :closable="false" :draggable="false"
            class="sm:min-w-[300px] md:min-w-[500px]" :pt="{root: 'border-none'}">
            <div class="py-1.5 px-3">
                <div class="flex flex-col items-center gap-x-5 sm:flex-row">
                    <div class="md:self-start w-10 h-10 aspect-square flex justify-center items-center bg-red-100 text-red-500 outline outline-2 outline-offset-2 outline-red-400 rounded-full">
                        <i class="pi pi-trash" style="font-size: 1.3rem;" />
                    </div>
                    <div class="space-y-5">
                        <div class="text-center sm:text-left mt-3 sm:mt-0">
                            <div class="font-bold text-zinc-900 text-lg">Delete record</div>
                            <div class="text-zinc-900 text-md mt-2">
                                Are you sure you want to delete this record?
                                <br />
                                <div class="text-zinc-500 mt-1 text-sm">This action cannot be reversed.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="flex justify-end gap-x-2 w-full">
                    <SecondaryButton class="w-full md:w-auto" @click="hide()">
                        <div>Keep it</div>
                    </SecondaryButton>
                    <AlertButton class="w-full md:w-auto" :loading="loading" @click="handleConfirm">
                        <div>Delete it</div>
                    </AlertButton>
                </div>
            </template>
        </PVDialog>
    </div>
</template>

<script setup>
// IMPORTS
import {ref, nextTick} from "vue";
// COMPOSABLES
import useAppToast from '@/composables/toast.js';
import {useService} from "@/composables/service.js";

const emit = defineEmits(['done']);

const service = useService();
const toast = useAppToast();

const display = ref(false);

const loading = ref(false);

const route = ref(null);
const recordId = ref(null);

const show = () => display.value = true;
const hide = () => display.value = false;

const showConfirm = (_route, id) => {
    route.value = _route;
    recordId.value = id;
    nextTick(() => show()); 
};

const handleConfirm = () => {
    loading.value = true;
    service.delete(`${route.value}/${recordId.value}`).then(() => {
        emit('done');
        toast.defaultDeleted();
    }).catch((error) => {
        toast.defaultError(error.message ?? null);
    }).finally(() => {
        loading.value = false;
        nextTick(() => hide()); 
    })
}

defineExpose({showConfirm});
</script>
