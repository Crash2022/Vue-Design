<template>
    <div class="buttons_page">
        <div class="heading_2">Colors</div>
        <div>
            <CustomButton @click="buttonClick" :label="'Button Primary'"/>
            <CustomButton @click="buttonClick" :label="'Button Secondary'" :color="'secondary'"/>
            <CustomButton @click="buttonClick" :label="'Button Info'" :color="'info'"/>
        </div>
        <div>
            <CustomButton @click="buttonClick" :label="'Button Success'" :color="'success'"/>
            <CustomButton @click="buttonClick" :label="'Button Warning'" :color="'warning'"/>
            <CustomButton @click="buttonClick" :label="'Button Danger'" :color="'danger'"/>
        </div>

        <div class="heading_2">Disabled, Rounded, Outlined</div>
        <div>
            <CustomButton @click="buttonClick" :label="'Button Primary Disabled'" disabled/>
            <CustomButton @click="buttonClick" :label="'Button Primary Rounded'" :rounded="true"/>
            <CustomButton @click="buttonClick" :label="'Button Outlined'" :outlined="true"/>
        </div>

        <div class="heading-2">Icons</div>
        <div class="line">
            <CustomButton color="primary" icon="heart" outlined/>
            <CustomButton color="second" icon="hand"/>
            <CustomButton color="success" icon="address-book" outlined/>
            <CustomButton color="info" icon="credit-card"/>
            <CustomButton color="warning" icon="lemon" outlined/>
            <CustomButton color="danger" icon="hourglass"/>
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