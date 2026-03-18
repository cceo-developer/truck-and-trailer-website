<template>
    <div class="flex items-center justify-center">
        <div class="space-y-1">
            <template v-if="preview == null">
                <div class="flex items-center justify-center gap-x-2">
                    <FileUpload 
                        ref="upload" mode="basic" name="image" chooseLabel="Image of the driver's license"
                        url="/api/upload" accept="image/*" :maxFileSize="10000000"
                        @select="$value => handleFileChange($value)">
                        <template #filelabel>{{ null }}</template>
                    </FileUpload>
                </div>
                <div class="mt-1 text-xs text-zinc-500 text-center">
                    JPG, JPEG or PNG. Maximum size: 10MB.
                </div>
            </template>
            <template v-if="!loading">
                <div v-if="fileName && preview" class="flex flex-col">
                    <PVImage v-if="preview" :src="preview" preview alt="Image" class="custom-image shadow-md p-2 rounded-lg self-center outline outline-2 outline-offset-3 outline-primary-300" />
                    <div class="self-center text-sm pt-2 text-zinc-500">{{ fileName }}</div>
                </div>
                <div class="flex justify-center">
                    <IconButton v-if="preview != null" tooltip="Delete selected image" icon="pi-trash" @click="clearImage" />
                </div>
            </template>
            <template v-if="loading">
                <div class="relative">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass fa-beat-fade" style="font-size: 5rem;" />
                        <div class="pt-6 font-bold text-sm text-zinc-500">Analyzing image...</div>
                    </div>
                    <Skeleton class="opacity-50" height="14rem" width="26rem" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
// IMPORTS
import {ref, onBeforeUnmount} from 'vue';
// SERVICE
import {analyzeDriverLicense} from '@/services/customer/driver-license-services.js';

const upload = ref(null);
const item = defineModel({type: Object, required: true});
const loading = defineModel('loading', {type: Boolean, required: true});

const props = defineProps({
    toast: {type: Object, required: true},
    defaultValues: {type: Function, required: true},
})

const preview = ref(null);
const fileName = ref(null);

const clearImage = () => {
    if (preview.value) {
        URL.revokeObjectURL(preview.value);
    }
    item.value.image_to_upload = null;
    preview.value = null;
    fileName.value = null;
    item.value = Object.assign({}, props.defaultValues(), {
        user_id: item.value.user_id,
    });
}

const handleFileChange = (value) => {
    const file = value.files[0];
    if (preview.value) {
        URL.revokeObjectURL(preview.value);
    }
    preview.value = URL.createObjectURL(file);    
    item.value.image_to_upload = file;
    fileName.value = file.name;

    loading.value = true;
    props.toast.defaultInfo("Reading driver's license.");
    analyzeDriverLicense(file).then((response) => {
        item.value = Object.assign({}, item.value, response.data);
    }).catch(() => {
        props.toast.defaultError("Error reading driver's license information.");
    }).finally(() => {
        loading.value = false;
    });
}

onBeforeUnmount(() => {
    if (preview.value) {
        URL.revokeObjectURL(preview.value);
    }
});

</script>

<style scoped>
::v-deep(.custom-image img) {
    height: 13rem;
    width: auto;
}
</style>