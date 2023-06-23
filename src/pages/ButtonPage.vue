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

        <div class="heading_2">Icons</div>
        <div>
            <CustomButton color="primary" icon="heart"/>
            <CustomButton color="secondary" icon="hand"/>
            <CustomButton color="success" icon="address-book"/>
            <CustomButton color="info" icon="credit-card"/>
            <CustomButton color="warning" icon="lemon"/>
            <CustomButton color="danger" icon="hourglass"/>
            <CustomButton color="danger" icon="hourglass" outlined/>
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