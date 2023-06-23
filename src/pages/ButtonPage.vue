<template>
    <div class="buttons_page">
        <div class="heading_2">Colors</div>
        <div>
            <CustomButton @click="buttonClick">
                Button Primary
            </CustomButton>
            <CustomButton @click="buttonClick" :color="'secondary'">
                Button Secondary
            </CustomButton>
            <CustomButton @click="buttonClick" :color="'success'">
                Button Success
            </CustomButton>
        </div>
        <div>
            <CustomButton @click="buttonClick" :color="'info'">
                Button Info
            </CustomButton>
            <CustomButton @click="buttonClick" :color="'warning'">
                Button Warning
            </CustomButton>
            <CustomButton @click="buttonClick" :color="'danger'">
                Button Danger
            </CustomButton>
        </div>

        <div class="heading_2">Disabled, Rounded, Outlined</div>
        <div>
            <CustomButton @click="buttonClick" disabled>
                Button Primary Disabled
            </CustomButton>
            <CustomButton @click="buttonClick" :rounded="true">
                Button Primary Rounded
            </CustomButton>

            <CustomButton @click="buttonClick" :outlined="true">
                Button Outlined
            </CustomButton>
        </div>
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
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
}
</style>