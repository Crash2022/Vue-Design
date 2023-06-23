<template>
    <div class="buttons_page">
        <custom-button @click="buttonClick">Button Primary</custom-button>
        <custom-button @click="buttonClick" :secondary="true">Button Second</custom-button>
    </div>
</template>

<script setup>
import CustomButton from "@/shared/ui/CustomUI/CustomButton.vue"

const buttonClick = () => {
    alert('На меня нажали')
}
</script>

<style lang="scss" scoped>
.buttons_page {
    > div {
        margin-bottom: 10px;
    }
}
</style>