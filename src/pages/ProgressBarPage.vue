<template>
    <div class="heading_2">Progress Bar</div>
    <custom-progress-bar percent="10" max-width="300px"/>
    <custom-progress-bar percent="30" max-width="400px" color="success"/>
    <custom-progress-bar percent="50" max-width="500px" color="warning"/>
</template>

<script setup>

import CustomProgressBar from '@/shared/ui/CustomUI/CustomProgressBar.vue'
</script>

<style lang="scss" scoped>

</style>