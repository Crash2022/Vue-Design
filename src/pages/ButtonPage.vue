<template>
    <div>
        <custom-button @click="buttonClick">Button</custom-button>
    </div>
</template>

<script setup>
import CustomButton from "@/shared/ui/CustomUI/CustomButton.vue"

const buttonClick = () => {
    alert('На меня нажали!')
}
</script>

<style lang="scss" scoped>

</style>