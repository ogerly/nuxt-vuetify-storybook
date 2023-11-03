<template>
   
    <v-checkbox v-model="props.model" :label="props.label" append-icon="mdi-magnify"></v-checkbox>

</template>
<script setup>




const props = defineProps({
    model: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: 'Check me'
    }
})

</script>