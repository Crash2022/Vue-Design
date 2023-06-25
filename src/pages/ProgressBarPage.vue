<template>
    <div class="heading_2">Progress Bar</div>
    <custom-progress-bar percent="10" max-width="300px"/>
    <custom-progress-bar percent="30" max-width="400px" color="success"/>
    <custom-progress-bar percent="50" max-width="500px" color="warning"/>

    <custom-progress-bar :percent="currentPercent" max-width="600px"/>
    <custom-button @click="addProgressPercent"
                   :label="'Добавить 10%'"
                   :disabled="currentPercent === 100"
    />
</template>

<script setup>
import CustomProgressBar from '@/shared/ui/CustomUI/CustomProgressBar.vue'
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'
import {ref} from 'vue'

const currentPercent = ref(10)
const addProgressPercent = () => {
    if (currentPercent.value === 100) return
    currentPercent.value += 30
}
</script>

<style lang="scss" scoped>

</style>