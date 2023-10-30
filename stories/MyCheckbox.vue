<template>
    <v-app>
    <v-checkbox v-model="model" :label="label"></v-checkbox>
</v-app>
</template>
<script setup>
    const model = ref(false)
    const label = ref('Check me')
</script>