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
            <CustomButton @click="buttonClick" color="primary" icon="heart"/>
            <CustomButton @click="buttonClick" color="secondary" icon="hand"/>
            <CustomButton @click="buttonClick" color="success" icon="address-book"/>
            <CustomButton @click="buttonClick" color="info" icon="credit-card"/>
            <CustomButton @click="buttonClick" color="warning" icon="lemon"/>
            <CustomButton @click="buttonClick" color="danger" icon="hourglass"/>
            <CustomButton @click="buttonClick" color="danger" icon="hourglass" outlined/>
        </div>

        <div class="heading_2">Sizes</div>
        <div>
            <CustomButton @click="buttonClick" :label="'Button Primary'"/>
            <CustomButton @click="buttonClick" :label="'Button Primary'" :size="'large'"/>
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
        align-items: flex-end;
        gap: 10px;
        margin-bottom: 10px;
    }
}
</style>