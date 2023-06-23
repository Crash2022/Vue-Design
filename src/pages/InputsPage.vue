<template>
    <div class="inputs_page">
        <div class="heading_2">Inputs Page</div>
        <custom-input :name="'name'"
                      :label="'Ваше имя'"
                      :placeholder="'Ваше имя'"
        />
    </div>
</template>

<script setup>
import CustomInput from '@/shared/ui/CustomUI/CustomInput.vue'
import {ref} from 'vue'

const fieldName = ref('')

</script>

<style lang="scss" scoped>
.inputs_page {
    //> div {
    //    display: flex;
    //    align-items: flex-end;
    //    gap: 10px;
    //    margin-bottom: 10px;
    //}
}
</style>