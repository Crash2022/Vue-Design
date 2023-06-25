<template>
    <div class="heading_2">Progress Bar</div>
    <custom-progress-bar percent="10" max-width="300px"/>
    <custom-progress-bar percent="30" max-width="400px" color="success"/>

    <custom-progress-bar :percent="currentPercent" color="warning" max-width="600px"/>
    <div class="progress_buttons">
        <custom-button @click="addProgressPercent"
                       :label="'Добавить 10%'"
                       :disabled="currentPercent === 100"
        />
        <custom-button @click="clearProgressPercent"
                       :label="'Сбросить до 10%'"
        />
    </div>

    <div class="heading_2">Progress Circle</div>
    <custom-progress-circle :percent="currentCirclePercent" color="danger"/>
    <div class="progress_buttons">
        <custom-button @click="addCircleProgressPercent"
                       :label="'Добавить 25%'"
                       :disabled="currentCirclePercent === 100"
        />
        <custom-button @click="clearCircleProgressPercent"
                       :label="'Сбросить'"
        />
    </div>
</template>

<script setup>
import CustomProgressBar from '@/shared/ui/CustomUI/CustomProgressBar.vue'
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'
import CustomProgressCircle from '@/shared/ui/CustomUI/CustomProgressCircle.vue'
import {ref} from 'vue'

const currentPercent = ref(10)
const currentCirclePercent = ref(0)
const addProgressPercent = () => {
    if (currentPercent.value === 100) return
    currentPercent.value += 30
}
const clearProgressPercent = () => {
    currentPercent.value = 10
}

const addCircleProgressPercent = () => {
    if (currentCirclePercent.value === 100) return
    currentCirclePercent.value += 25
}
const clearCircleProgressPercent = () => {
    currentCirclePercent.value = 0
}
</script>

<style lang="scss" scoped>
.progress_buttons {
    display: flex;
    gap: 20px;
}
</style>