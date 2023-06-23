<template>
    <div class="buttons_page">
        <CustomButton @click="buttonClick">
            Button Primary
        </CustomButton>
        <CustomButton @click="buttonClick" :color="'secondary'">
            Button Secondary
        </CustomButton>
        <CustomButton @click="buttonClick" :color="'success'">
            Button Success
        </CustomButton>
        <CustomButton @click="buttonClick" :color="'info'">
            Button Info
        </CustomButton>
        <CustomButton @click="buttonClick" :color="'warning'">
            Button Warning
        </CustomButton>
        <CustomButton @click="buttonClick" :color="'danger'">
            Button Danger
        </CustomButton>

        <CustomButton @click="buttonClick" :rounded="true">
            Button Primary Rounded
        </CustomButton>

        <CustomButton @click="buttonClick" :outlined="true">
            Button Outlined
        </CustomButton>

        <CustomButton @click="buttonClick" disabled>
            Button Primary Disabled
        </CustomButton>
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